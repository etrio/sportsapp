import { Text, View } from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";

export default function TabOneScreen() {
  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-black border-b' edges={['top']}>
      <View>
        <Text className='text-red-700'>feed</Text>
      </View>
    </SafeAreaView>
  );
}