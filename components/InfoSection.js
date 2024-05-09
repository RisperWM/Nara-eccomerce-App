import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const InfoSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userDetails}>
      <TouchableOpacity>
        <Image
          style={styles.image}
          source={require("../assets/naralogo2.jpeg")}
        />
      </TouchableOpacity>
      <View style={styles.userData}>
        <Text style={styles.helloText}>
          Hello there{" "}
          <MaterialIcons name="waving-hand" size={24} color="orange" />{" "}
        </Text>
        <Text style={styles.name}>Risper Wanja</Text>
      </View>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity>
          <MaterialIcons name="notifications-none" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <SimpleLineIcons name="settings" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems: "center",
    gap: 15,
    margin: 15,
  },
  userDetails:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    gap:12,
    alignItems:"center"
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  helloText: {
    fontSize: 14,
    fontWeight: "400",
  },
  name: {
    fontSize: 19,
    fontWeight: "600",
  },
  icons: {
    display: "flex-end",
    flexDirection: "row",
    gap: 12,
  },
});
