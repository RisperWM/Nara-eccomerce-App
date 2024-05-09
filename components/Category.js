import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Category = () => {
  return (
    <View style={styles.category1}>
      <TouchableOpacity style={styles.categories}>
        <MaterialCommunityIcons
          name="human-male-female"
          size={24}
          color="black"
        />
        <Text>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categories}>
        <Entypo name="man" size={24} color="black" />
        <Text>Men</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categories}>
        <Ionicons name="woman" size={24} color="black" />
        <Text>Ladies</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categories}>
        <FontAwesome6 name="children" size={24} color="black" />
        <Text>Kids</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
    category1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        margin:15,
    },
    categories:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#d4d4d4",
        width:54,
        height:54,
        borderRadius:50
    }
});
