import { Image, Pressable, Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default function TabOneScreen() {
  return (
    <View className='pt-16'>
      {/* header */}
      <View className="justify-center items-center pt-6 px-4">
        <Text className="text-3xl font-semibold text-[#e0e0e0]">Feed</Text>
      </View>
      {/* map */}
      <Pressable className='mx-4 mt-6' onPress={() => { console.log('pressed') }}>
        <View className="w-full h-52 rounded-2xl overflow-hidden relative">
          <Image
            source={require('../../assets/images/map.png')}
            className="w-full h-52 rounded-2xl absolute top-0 left-0"
            style={{ position: 'absolute' }}
          />
          <View className="absolute inset-0 flex items-center justify-center">
            <Text className="text-white text-4xl font-bold">
              Find local activities
            </Text>
            <Text className='text-accent font-semibold'>+9 activities in area</Text>
          </View>
        </View>
      </Pressable>
      {/* activity list */}
      <View className='mx-4 mt-6'>
        <Text className='text-white text-4xl font-semibold'>Current top activities 🔥</Text>
        <View className='flex-col gap-y-6 mt-4'>
          <View className='h-24 w-full bg-darkAccent rounded-2xl justify-center'>
            <Text className='text-white text-xl text-center'>test test</Text>
          </View>
          <View className='h-24 w-full bg-darkAccent rounded-2xl justify-center'>
            <Text className='text-white text-xl text-center'>test test</Text>
          </View>
          <View className='h-24 w-full bg-darkAccent rounded-2xl justify-center'>
            <Text className='text-white text-xl text-center'>test test</Text>
          </View>
        </View>
      </View>
    </View>

  );
}