import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import React from "react"
import { StatusBar } from "expo-status-bar"
import { useNavigation } from "@react-navigation/native"
import Animated, { FadeIn, FadeInDown, FadeInUp, FadeOut } from "react-native-reanimated"

export default function SignUpScreen() {
  const navigator = useNavigation()
  return (
    <Animated.View className="bg-white h-full w-full">
      <StatusBar style="light" />
      <Image
        className="h-full w-full absolute -mt-3"
        source={require("../assets/images/background.png")}
      />

      {/* Lights */}
      <View className="flex-row justify-around w-full absolute">
        <Animated.Image
          entering={FadeInUp.delay(200).duration(1000).springify()}
          className="h-[225] w-[90]"
          source={require("../assets/images/light.png")}
        />
        <Animated.Image
          entering={FadeInUp.delay(400).duration(1000).springify()}
          className="h-[160] w-[65]"
          source={require("../assets/images/light.png")}
        />
      </View>

      {/* Title and Form  */}
      <View className="h-full w-full flex justify-around pt-48">
        {/* Title  */}
        <View className="flex items-center">
          <Animated.Text entering={FadeInUp.duration(1000).springify()} className="text-white font-bold tracking-wider text-5xl">
            Sign Up
          </Animated.Text>
        </View>

        {/* Form */}
        <View className="flex items-center mx-4 space-y-4">
          <Animated.View entering={FadeInDown.duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Username" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(200).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput placeholder="Email" placeholderTextColor={"gray"} />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(400).duration(1000).springify()} className="bg-black/5 p-5 rounded-2xl w-full">
            <TextInput
              placeholder="Password"
              secureTextEntry
              placeholderTextColor={"gray"}
            />
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(600).duration(1000).springify()} className="w-full">
            <TouchableOpacity className="w-full bg-sky-400 p-3 rounded-2xl mb-3">
              <Text className="text-white text-center text-xl font-bold">
                Sign Up
              </Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View entering={FadeInDown.delay(800).duration(1000).springify()} className="flex-row justify-center">
            <Text>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigator.push("Login")}>
              <Text className="text-sky-600">Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  )
}
