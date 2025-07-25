import { Feather } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

export default function TabTwoScreen() {
    return (
        <View className="pt-16">
            {/* header */}
            <View className="flex-row justify-between items-center pt-6 px-4">
                <Feather name="edit-2" size={24} color="white" />
                <Text className="text-3xl text-[#e0e0e0]">Profile</Text>
                <Feather name="settings" size={24} color="white" />
            </View>
            {/* profile */}
            <View className="flex-col items-center gap-2 pt-12 px-4">
                <Image source={require('../../assets/images/avatar.jpg')} className="w-24 h-24 rounded-full" />
                <View>
                    <Text className="text-white text-lg font-bold text-center">Maks Dudek</Text>
                    <Text className="text-darkAccent">@mobbynranger</Text>
                </View>
            </View>
            {/* stats */}
            <View className="px-4 mt-6 space-y-4 gap-y-4">
                <Text className="text-white text-xl font-semibold">Statystyki</Text>

                <View className="flex-row justify-between gap-3">
                    <View className="flex-1 bg-[#111111] p-4 rounded-2xl">
                        <Text className="text-zinc-400 text-sm">Poziom</Text>
                        <Text className="text-white text-2xl font-bold">12</Text>
                    </View>

                    <View className="flex-1 bg-[#111111] p-4 rounded-2xl">
                        <Text className="text-zinc-400 text-sm">Punkty</Text>
                        <Text className="text-white text-2xl font-bold">1 580</Text>
                    </View>
                </View>

                <View className="flex-row justify-between gap-3">
                    <View className="flex-1 bg-[#111111] p-4 rounded-2xl">
                        <Text className="text-zinc-400 text-sm">Reputacja</Text>
                        <Text className="text-white text-2xl font-bold">21</Text>
                    </View>

                    <View className="flex-1 bg-[#111111] p-4 rounded-2xl">
                        <Text className="text-zinc-400 text-sm">Aktywności ukończone</Text>
                        <Text className="text-white text-2xl font-bold">24</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}