import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const navigation = useNavigation()

  const handleFocus = () => {
    setIsFocused(true);
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleBackButton = () =>{
    navigation.navigate("Auth")
  }

  const handleSignIn =() =>{
    navigation.navigate("Nav")
  }

  const { width } = Dimensions.get("window");
  const buttonWidth = width * 0.8;
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backArrow} onPress={handleBackButton}>
        <FontAwesome6 name="arrow-left-long" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.creatAccText}>Login to your account</Text>

      <View style={styles.inputFields}>
        <TextInput
          placeholder="Enter Email"
          style={[
            styles.emailInput,
            { width: buttonWidth },
            isFocused && styles.inputFocus,
          ]}
          onFocus={handleFocus}
        />
        <TextInput
          placeholder="Enter password"
          style={[
            styles.emailInput,
            { width: buttonWidth },
            isFocused && styles.inputFocus,
          ]}
          onFocus={handleFocus}
        />
      </View>

      <View style={styles.rememberMe}>
        <Checkbox
          style={styles.checkbox}
          value={rememberMe}
          onValueChange={toggleRememberMe}
          color={rememberMe ? "#000000" : undefined}
        />
        <Text style={styles.rememberMeText}>Remember me</Text>
      </View>

      <TouchableOpacity style={[styles.signupButton, { width: buttonWidth }]} onPress={handleSignIn}>
        <Text style={styles.signupButtonText}>Log in</Text>
      </TouchableOpacity>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 25 }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "#B4B4B4" }} />
        <View>
          <Text style={{ width: 100, textAlign: "center", fontWeight: "900" }}>
            or continue with
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "#B4B4B4" }} />
      </View>

      <View style={styles.otherPlatforms}>
        <FontAwesome5 name="facebook" size={24} color="#1877F2" />
        <FontAwesome name="google" size={24} color="red" />
        <FontAwesome5 name="apple" size={26} color="#A2AAAD" />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  backArrow: {
    marginTop: 10,
  },
  creatAccText: {
    fontSize: 45,
    fontWeight: "800",
    marginTop: 40,
  },
  inputFields: {
    alignItems: "center",
    margin: 10,
    marginTop: 30,
  },
  emailInput: {
    borderColor: "#B4B4B4",
    borderWidth: 1,
    padding: 8,
    margin: 10,
    borderRadius: 15,
  },
  inputFocus: {
    borderColor: "black",
    fontSize: 15,
  },
  rememberMe: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    margin: 20,
  },
  rememberMeText: {
    fontWeight: "700",
    fontSize: 15,
  },
  signupButton: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    padding: 13,
    margin: 10,
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  signupButtonText: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: 15,
  },
  otherPlatforms: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: 20,
    marginTop: 30,
  },
});
