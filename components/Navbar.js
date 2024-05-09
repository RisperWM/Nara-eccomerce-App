import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();

  const handleGoBack = () =>{
    navigation.goBack()
  }
  return (
    <View style={styles.statusBar}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.navTitle}>Special Offers</Text>
      </View>
      <TouchableOpacity style={styles.account}>
        <Image />
        <MaterialCommunityIcons name="account" size={31} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  statusBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  navTitle: {
    fontWeight: "700",
    fontSize: 23,
  },
  account: {
    backgroundColor: "#d4d4d4",
    width: 33,
    height: 33,
    borderRadius: 40,
  },
});
