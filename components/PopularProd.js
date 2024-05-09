import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const PopularProd = () => {
    const navigation = useNavigation();
    const handleSpecialOffer = () =>{
        navigation.goBack()
    }
  return (
    <View style={styles.container}>
      <View style={styles.offerText}>
        <Text style={{ fontSize: 20, fontWeight: "800" }}>Popular products</Text>
        <TouchableOpacity onPress={handleSpecialOffer}>
          <Text style={{ fontSize: 14, fontWeight: "600" }}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopularProd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop:10
  },
  offerText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
  },
  specialOffer: {
    justifyContent: "center",
    alignItems: "center",
  },
  Specialoffer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
