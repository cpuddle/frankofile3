import { defaultStyles } from "@/styles"
import { View } from "react-native"
import { Stack } from "expo-router"
import { StackScreenWithSearchBar } from "@/constants/layout"

const SearchScreenLayout = () => {
return (
    <View style={defaultStyles.container}>
        <Stack>
            <Stack.Screen
            name="index"
            options={{
                ...StackScreenWithSearchBar,
                headerTitle: 'Search',
            }}
            />
        </Stack>
    </View>

)}

export default SearchScreenLayout