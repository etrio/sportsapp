import { Feather } from '@expo/vector-icons';
import { Image, Text, useColorScheme, View } from 'react-native';
import { useEffect, useState } from 'react';

export default function TabTwoScreen() {

    const colorScheme = useColorScheme();

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (colorScheme === 'dark') {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, [colorScheme]);

    return (
        <View className={`pt-16 ${isDarkMode ? "bg-background" : "bg-white"} h-full`}>
            {/* header */}
            <View className={`flex-row justify-between items-center p-4 border-b ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}>
                <Feather name="edit-2" size={24} color={isDarkMode ? "#d1d5db" : "#6b7280"} />
                <Text className={`text-3xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>Profile</Text>
                <Feather name="settings" size={24} color={isDarkMode ? "#d1d5db" : "#6b7280"} />
            </View>
            {/* profile */}
            <View className="flex-col items-center gap-2 pt-12 px-4">
                <Image source={require('../../assets/images/avatar.jpg')} className="w-24 h-24 rounded-full" />
                <View>
                    <Text className="dark:text-white text-lg font-bold text-center">Maks Dudek</Text>
                    <Text className="text-accent">@mobbynranger</Text>
                </View>
            </View>
            {/* stats */}
            <View className="px-4 mt-6 space-y-4 gap-y-4">
                <Text className="dark:text-white text-xl font-semibold">Statystyki</Text>

                <View className="flex-row justify-between gap-3">
                    <View className="flex-1 dark:bg-card bg-white shadow-sm p-4 rounded-2xl">
                        <Text className="text-zinc-400 text-sm">Poziom</Text>
                        <Text className="dark:text-white text-2xl font-bold">12</Text>
                    </View>

                    <View className="flex-1 dark:bg-card bg-white shadow-sm p-4 rounded-2xl">
                        <Text className="text-zinc-400 text-sm">Punkty</Text>
                        <Text className="dark:text-white text-2xl font-bold">1 580</Text>
                    </View>
                </View>

                <View className="flex-row justify-between gap-3">
                    <View className="flex-1 dark:bg-card bg-white shadow-sm p-4 rounded-2xl">
                        <Text className="text-zinc-400 text-sm">Reputacja</Text>
                        <Text className="dark:text-white text-2xl font-bold">21</Text>
                    </View>

                        <View className="flex-1 dark:bg-card bg-white shadow-sm p-4 rounded-2xl">
                        <Text className="text-zinc-400 text-sm">Aktywności ukończone</Text>
                        <Text className="dark:text-white text-2xl font-bold">24</Text>
                    </View>
                </View>
            </View>

        </View>
    );
}