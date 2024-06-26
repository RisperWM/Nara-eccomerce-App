import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Specialoffer = ({ percentage, category, description,url }) => {
  return (
    <View style={styles.container}>
      <View style={styles.offerText}>
        <Text style={styles.percentage}>{percentage}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.image}>
        <Image
          source={url}
          style={styles.images}
        />
      </View>
    </View>
  );
};

export default Specialoffer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef0f2",
    height: 158,
    width: "93%",
    borderRadius: 15,
    margin: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center"
  },
  offerText: {
    width:"53%",
  },
  percentage: {
    fontSize: 29,
    fontWeight: "800",
    color: "black",
    marginBottom:5
  },
  category: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    marginBottom:5
  },
  description: {
    fontSize: 12,
    fontWeight: "500",
    color: "black",
    marginBottom:5
  },
  images:{
    height:140,
    width:110,
  }
});
