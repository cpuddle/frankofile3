import library from '@/assets/data/library.json'
import { FlatList, FlatListProps, View, Text } from 'react-native'
import { TrackListItem } from './TrackListItem'
import { utilsStyles } from '@/styles'
import TrackPlayer, { Track } from 'react-native-track-player'
import FastImage from 'react-native-fast-image'
import { unknownTrackImageUri } from '@/constants/images'
import { useQueue } from '@/store/queue'
import { useRef } from 'react'

export type TrackListProps = Partial<FlatListProps<Track>> & {
	id: string
	tracks: Track[]
}

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TrackList = ({id, tracks, ...flatListProps}: TrackListProps) => {

	const queueOffset = useRef(0)
	const {activeQueueId, setActiveQueueId} = useQueue()
	
	const handleTrackSelect = async (selectedTrack: Track) => {
	const trackIndex = tracks.findIndex((track) => track.url === selectedTrack.url)

		if (trackIndex === -1) return

		const isChangingQueue = id !== activeQueueId

		if (isChangingQueue) {
			const beforeTracks = tracks.slice(0, trackIndex)
			const afterTracks = tracks.slice(trackIndex + 1)

			await TrackPlayer.reset()

			// we construct the new queue
			await TrackPlayer.add(selectedTrack)
			await TrackPlayer.add(afterTracks)
			await TrackPlayer.add(beforeTracks)

			await TrackPlayer.play()

			queueOffset.current = trackIndex
			setActiveQueueId(id)
		} else {
			const nextTrackIndex =
				trackIndex - queueOffset.current < 0
					? tracks.length + trackIndex - queueOffset.current
					: trackIndex - queueOffset.current

			await TrackPlayer.skip(nextTrackIndex)
			TrackPlayer
		}
}
	return (
		<FlatList 
			data={tracks} 
			ItemSeparatorComponent={ItemDivider}
			contentContainerStyle={{paddingTop:10, paddingBottom:128}}
			//ListFooterComponent={ItemDivider}
			ListEmptyComponent={
				<View>
					<Text style={utilsStyles.emptyContentText}>No Songs Found</Text>

					<FastImage
						source={{ uri: unknownTrackImageUri, priority: FastImage.priority.normal }}
						style={utilsStyles.emptyContentImage}
					/>
				</View>
			}
			renderItem={({item: track}) => (
				<TrackListItem track={track} onTrackSelect={handleTrackSelect}/>
			)}
			{...flatListProps}
		/>
	)
}