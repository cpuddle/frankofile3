import { defaultStyles } from "@/styles"
import { ScrollView, Text, View } from "react-native"
import { TrackList } from "@/components/TrackList"
import { screenPadding } from "@/constants/tokens"
import { useNavigationSearch } from "@/hooks/useNavigationSearch"
import library from '@/assets/data/library.json'
import { useMemo } from "react"
import { trackTitleFilter } from "@/helpers/filter"

const SongsScreen = () => {

    const search = useNavigationSearch({
        searchBarOptions: {
            placeholder: 'Find in Songs'
        }
    })

    const filteredTracks = useMemo(() => {
        if(!search) return library

        return library.filter(trackTitleFilter(search))
    }, [search])

    return (
        <View style={defaultStyles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic"
                        style={{ paddingHorizontal: screenPadding.horizontal}}>
                <TrackList tracks={filteredTracks} scrollEnabled={false}/>
            </ScrollView>
        </View>
    )
}

export default SongsScreen