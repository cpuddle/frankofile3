import library from '@/assets/data/library.json'
import { FlatList, FlatListProps, View } from 'react-native'
import { TrackListItem } from './TrackListItem'
import { utilsStyles } from '@/styles'

export type TrackListProps = Partial<FlatListProps<unknown>> & {
	tracks: any[]
}

const ItemDivider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)

export const TrackList = ({tracks, ...flatListProps}: TrackListProps) => {
	return (
		<FlatList 
			data={tracks} 
			ItemSeparatorComponent={ItemDivider}
			contentContainerStyle={{paddingTop:10, paddingBottom:128}}
			ListFooterComponent={ItemDivider}
			renderItem={({item: track}) => (
				<TrackListItem 
					track={{
						...track,
						image: track.artwork
					}}
				/>
			)}
			{...flatListProps}
		/>
	)
}