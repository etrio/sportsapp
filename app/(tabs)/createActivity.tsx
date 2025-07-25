import {SafeAreaView} from "react-native-safe-area-context";
import {Text} from "react-native";

export default function createActivity() {
    return (
        <SafeAreaView className="flex-1">
            <Text className="text-white">createActivity</Text>
        </SafeAreaView>
    )
}