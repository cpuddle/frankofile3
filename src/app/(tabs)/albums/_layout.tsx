import { defaultStyles } from "@/styles"
import { View } from "react-native"
import { Stack } from "expo-router"
import { StackScreenWithSearchBar } from "@/constants/layout"

const AlbumsScreenLayout = () => {
return (
    <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen
            name="index"
            options={{
                ...StackScreenWithSearchBar,
                headerTitle: 'Albums',
            }}
            />
        </Stack>
    </View>

)}

export default AlbumsScreenLayout