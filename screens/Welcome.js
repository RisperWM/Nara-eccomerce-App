import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  const handleGetStarted = () => {
    navigation.replace("Auth");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/welcome.jpg")}
        style={styles.background}
        imageStyle={styles.image}
        resizeMode="cover"
        blurRadius={0}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0)", "#000000"]}
          style={styles.gradient}
        >
          <SafeAreaView>
            <View styles={styles.text}>
              <Text style={styles.welcomeText}>
                Welcome to{" "}
                <MaterialCommunityIcons
                  name="hand-wave"
                  size={26}
                  color="gold"
                />
              </Text>
              <Text style={styles.logoText}>Nara</Text>
              <Text style={styles.descriptionText}>
                The best e-commerce platform catering to all your clothing needs
              </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleGetStarted}
                >
                  <Text style={styles.getStarted}>
                    Get Started{"   "}
                    <AntDesign name="arrowright" size={24} color="black" />
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "flex-end",
  },

  welcomeText: {
    marginLeft: 20,
    color: "white",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 10,
  },
  logoText: {
    marginLeft: 20,
    color: "white",
    fontSize: 50,
    fontWeight: "800",
    marginBottom: 15,
  },
  descriptionText: {
    marginLeft: 20,
    color: "white",
    width: 300,
    marginBottom: 20,
    fontWeight: "500",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "center",
    margin: 20,
    marginBottom: 40,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: 200,
    height: 40,
    borderRadius: 20,
  },

  getStarted: {
    color: "black",
    fontWeight: "600",
    fontSize: 18,
  },
});
