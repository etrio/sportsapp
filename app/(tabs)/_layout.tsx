import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Link, Tabs} from 'expo-router';
import {Pressable} from 'react-native';

import Colors from '@/constants/Colors';
import {useColorScheme} from '@/components/useColorScheme';
import {useClientOnlyValue} from '@/components/useClientOnlyValue';
import {HapticTab} from '@/components/HapticTab';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginTop: 0, marginBottom: -16}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#FF6A00',
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: false,
                tabBarButton: HapticTab,
                tabBarShowLabel: false
            }}>

            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="feed" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="createActivity"
                options={{
                    tabBarIcon: ({color, focused}) => <TabBarIcon name={focused ? "plus-square": "plus-square-o"} color={color} />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: ({color}) => <TabBarIcon name="user" color={color}/>,
                }}
            />
        </Tabs>
    );
}
