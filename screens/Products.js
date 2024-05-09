import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import PopularProd from "../components/PopularProd";
import Navbar from "../components/Navbar";
import { SafeAreaView } from "react-native-safe-area-context";

const Products = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Navbar title="Products" />
        <PopularProd showHeader={false}/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
  },
});
