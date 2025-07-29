import { Image, Pressable, SafeAreaView, ScrollView, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import MapView from 'react-native-maps';
import { Bell, Moon, Search, Sun } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function TabOneScreen() {

  const colorScheme = useColorScheme();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (colorScheme === 'dark') {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [colorScheme]);

  const activities = [
    {
      id: 1,
      title: "Morning Basketball",
      sport: "Basketball",
      location: "Central Park Court",
      time: "8:00 AM",
      date: "Today",
      participants: 6,
      maxParticipants: 10,
      distance: "0.5 mi",
      organizer: {
        name: "Alex Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      },
      difficulty: "Intermediate",
    },
    {
      id: 2,
      title: "Evening Soccer Match",
      sport: "Soccer",
      location: "Riverside Field",
      time: "6:30 PM",
      date: "Today",
      participants: 14,
      maxParticipants: 22,
      distance: "1.2 mi",
      organizer: {
        name: "Maria Santos",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face",
      },
      difficulty: "Beginner",
    },
    {
      id: 3,
      title: "Tennis Doubles",
      sport: "Tennis",
      location: "City Tennis Club",
      time: "10:00 AM",
      date: "Tomorrow",
      participants: 3,
      maxParticipants: 4,
      distance: "2.1 mi",
      organizer: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      },
      difficulty: "Advanced",
    },
    {
      id: 4,
      title: "Weekend Hiking",
      sport: "Hiking",
      location: "Mountain Trail",
      time: "7:00 AM",
      date: "Saturday",
      participants: 8,
      maxParticipants: 15,
      distance: "5.3 mi",
      organizer: {
        name: "Sarah Johnson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      },
      difficulty: "Intermediate",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getDifficultyColorDark = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-900 text-green-200"
      case "Intermediate":
        return "bg-yellow-600 text-yellow-200"
      case "Advanced":
        return "bg-red-900 text-red-200"
      default:
        return "bg-gray-700 text-gray-200"
    }
  }


  return (
    <SafeAreaView className={`flex-1 ${isDarkMode ? "bg-background" : "bg-white"}`}>
      {/* Header */}
      <View
        className={`flex-row items-center justify-between p-4 border-b ${isDarkMode ? "border-gray-800" : "border-gray-100"}`}
      >
        <View className="flex-row items-center gap-3">
          <Image source={require('../../assets/images/logo.png')} className="w-8 h-16" />
          <View>
            <Text className={`text-lg font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>SportConnect</Text>
            <Text className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Olsztyn, PL</Text>
          </View>
        </View>
        <View className="flex-row items-center gap-2">
          <TouchableOpacity className="w-9 h-9 items-center justify-center">
            <Ionicons name="search-outline" size={24} color={isDarkMode ? "#d1d5db" : "#6b7280"} />
          </TouchableOpacity>
          <TouchableOpacity className="w-9 h-9 items-center justify-center">
            <FontAwesome5 name="bell" size={20} color={isDarkMode ? "#d1d5db" : "#6b7280"} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Map Preview */}
        <View className="mx-4 mt-4">
          <View className={`h-48 rounded-xl overflow-hidden ${isDarkMode ? "bg-gray-800" : "bg-gray-200"}`}>
            <Image
              source={require('../../assets/images/map.png')}
              className="w-full h-full"
              resizeMode="cover"
            />
            <View className="absolute inset-0 bg-black/20" />
            <View className="absolute bottom-3 left-3 right-3 flex-row justify-between items-end">
              <View>
                <Text className="text-white text-lg font-medium">12 activities nearby</Text>
                <Text className="text-white text-sm opacity-90">Within 5 miles</Text>
              </View>
              <TouchableOpacity className={`px-3 py-1.5 rounded-md ${isDarkMode ? "bg-gray-800/90" : "bg-white/90"}`}>
                <Text className={`text-sm font-medium ${isDarkMode ? "text-white" : "text-gray-900"}`}>View Map</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Activities Section */}
        <View className="p-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}>
              Top Activities
            </Text>
            <TouchableOpacity>
              <Text className={`text-sm ${isDarkMode ? "text-blue-400" : "text-blue-600"}`}>See All</Text>
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            {activities.map((activity) => (
              <View key={activity.id} className={`p-4 rounded-xl ${isDarkMode ? "bg-card" : "bg-white"} shadow-sm`}>
                <View className="flex-row items-start gap-3">
                  <Image source={{ uri: activity.organizer.avatar }} className="w-10 h-10 rounded-full" />

                  <View className="flex-1">
                    <View className="flex-row items-start justify-between mb-2">
                      <View className="flex-1">
                        <Text className={`font-medium text-sm ${isDarkMode ? "text-white" : "text-gray-900"}`}>
                          {activity.title}
                        </Text>
                        <Text className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                          by {activity.organizer.name}
                        </Text>
                      </View>
                      <View
                        className={`px-2 py-1 rounded-md ${
                          isDarkMode
                            ? getDifficultyColorDark(activity.difficulty)
                            : getDifficultyColor(activity.difficulty)
                        }`}
                      >
                        <Text className="text-xs font-medium">{activity.difficulty}</Text>
                      </View>
                    </View>

                    <View className="flex-row items-center gap-4 mb-3">
                      <View className="flex-row items-center gap-1">
                        {/* <MapPin size={12} color={isDarkMode ? "#9ca3af" : "#6b7280"} /> */}
                        <Text className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          {activity.location}
                        </Text>
                      </View>
                      <View className="flex-row items-center gap-1">
                        {/* <Clock size={12} color={isDarkMode ? "#9ca3af" : "#6b7280"} /> */}
                        <Text className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                          {activity.distance}
                        </Text>
                      </View>
                    </View>

                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center gap-4">
                        <View className="flex-row items-center gap-1">
                          {/* <Calendar size={12} color={isDarkMode ? "#9ca3af" : "#6b7280"} /> */}
                          <Text className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {activity.date} • {activity.time}
                          </Text>
                        </View>
                        <View className="flex-row items-center gap-1">
                          {/* <Users size={12} color={isDarkMode ? "#9ca3af" : "#6b7280"} /> */}
                          <Text className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}>
                            {activity.participants}/{activity.maxParticipants}
                          </Text>
                        </View>
                      </View>
                      <TouchableOpacity
                        className={`px-3 py-1.5 rounded-md ${isDarkMode ? "bg-blue-500" : "bg-blue-600"}`}
                      >
                        <Text className="text-white text-xs font-medium">Join</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}