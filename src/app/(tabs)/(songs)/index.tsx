import { defaultStyles } from "@/styles"
import { ScrollView, Text, View } from "react-native"
import { TrackList } from "@/components/TrackList"

const SongsScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <ScrollView>
                <TrackList scrollEnabled={false}/>
            </ScrollView>
        </View>
    )
}

export default SongsScreen