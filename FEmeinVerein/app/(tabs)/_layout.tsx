import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Stack from "expo-router";
import { Button } from "react-native";
import { Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";
import { Link } from "@react-navigation/native";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Config } from "@/config/config";
import { Eilmeldung } from "@/components/Eilmeldung";
export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:
          Colors[colorScheme ?? "dark"].tabBarActiveTintColor,
        tabBarActiveBackgroundColor:
          Colors[colorScheme ?? "dark"].tabBarBackground,
        headerShown: true,
        headerTransparent: false,
        headerShadowVisible: false,
        headerTitle: Config.vereinsname,
        headerTintColor: Colors[colorScheme ?? "dark"].headerTintColor,
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "dark"].headerBackground,
          height: 100,
          borderBottomWidth: 0,
          borderColor: Colors[colorScheme ?? "dark"].icon,
        },
        headerRight: () => (
          <View style={{ paddingRight: 15 }}>
            <Link to="/liveticker">
              <Ionicons
                name="football"
                size={32}
                style={{ marginRight: 0, alignSelf: "center" }}
                ios="ios-football"
                color={Colors[colorScheme ?? "dark"].green}
              />
            </Link>
          </View>
        ),
        headerLeft: () => (
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 8,
              marginLeft: 10,
              marginTop: 15,
              backgroundColor: Colors[colorScheme ?? "dark"].headerBackground,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../assets/images/logo.png")}
              alt="alt"
              width={20}
              height={20}
              resizeMode={"cover"}
              style={{
                width: 50,
                height: 60,
              }}
            />
          </View>
        ),
        tabBarStyle: {
          backgroundColor: Colors[colorScheme ?? "dark"].tabBarBackground,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "News",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="senioren"
        options={{
          title: "Senioren",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "trophy" : "trophy-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="nachwuchs"
        options={{
          title: "Nachwuchs",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "football" : "football-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="gymnastik"
        options={{
          title: "Gymnastik",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="verein"
        options={{
          title: "Verein",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
