import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

export default function Welcome({ navigation }) {
  return (
    <View>
      <Text>Welcome</Text>
      <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
        <View>
          <Text>Create Account</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("LogIn")}>
        <View>
          <Text>Log in</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
