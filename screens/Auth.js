import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Auth = () => {
  const { width } = Dimensions.get("window");
  const buttonWidth = width * 0.75;
  
  const navigation= useNavigation();

  const handleEmailSignup = () =>{
    navigation.navigate("Signup")
  }

  const handleLogin= () =>{
    navigation.navigate("Login")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require("../assets/shopping_vector.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.logText}>Let's first log you in!</Text>

      <View>
        <TouchableOpacity
          style={[styles.signupPlatform, { width: buttonWidth }]}
        >
          <Text style={styles.signupPlatformText}>
            <FontAwesome5 name="facebook" size={24} color="#1877F2" />
            {"   "} Continue with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signupPlatform, { width: buttonWidth }]}
        >
          <Text style={styles.signupPlatformText}>
            <FontAwesome name="google" size={24} color="red" />
            {"   "} Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.signupPlatform, { width: buttonWidth }]}
        >
          <Text style={styles.signupPlatformText}>
            <FontAwesome5 name="apple" size={26} color="#A2AAAD" />
            {"   "} Continue with Apple
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 25 }}
      >
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center", fontWeight: "900" }}>
            Or
          </Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
      </View>

      <TouchableOpacity style={[styles.emailSignup, { width: buttonWidth }]} onPress={handleEmailSignup}>
        <Text style={styles.emailSignupText}>
          <MaterialIcons name="email" size={24} color="gold" />
          {"   "} Sign in with Email
        </Text>
      </TouchableOpacity>

      <Text style={styles.haveAccountText}>
        Already have an account?{" "}
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 40,
  },
  logText: {
    fontSize: 42,
    fontWeight: "900",
    marginBottom: 15,
  },
  signupPlatform: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  emailSignup: {
    marginTop: 30,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    alignItems: "center",
    backgroundColor: "black",
  },
  emailSignupText: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "600",
    fontSize: 15,
  },
  signupPlatformText: {
    fontWeight: "600",
    fontSize: 15,
  },
  haveAccountText: {
    marginTop: 30,
    fontSize: 15,
    fontWeight: "500",
    alignItems: "center",
  },
  loginText: {
    fontSize: 17,
    fontWeight: "800",
  },
});
