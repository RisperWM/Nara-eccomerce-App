import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import products from "../assets/products";
import CategoryButtons from "./CategoryButtons"; // Import CategoryButtons component

const PopularProd = ({ showHeader }) => {
  const navigation = useNavigation();
  const handleSpecialOffer = () => {
    navigation.navigate("Products");
  };

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchResults, setSearchResults] = useState(products);
  const productTypes = [
    "All",
    ...Array.from(new Set(products.map((product) => product.prodType))),
  ];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setSearchResults(products);
    } else {
      const filteredData = products.filter(
        (item) => item.prodType.toLowerCase() === category.toLowerCase()
      );
      setSearchResults(filteredData);
    }
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image source={item.imageUrl} style={styles.image} />
        <Text style={styles.title}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        {showHeader && (
          <View style={styles.offerText}>
            <Text style={{ fontSize: 20, fontWeight: "800" }}>
              Popular products
            </Text>
            <TouchableOpacity onPress={handleSpecialOffer}>
              <Text style={{ fontSize: 14, fontWeight: "600" }}>See All</Text>
            </TouchableOpacity>
          </View>
        )}
        <CategoryButtons
          productTypes={productTypes}
          selectedCategory={selectedCategory}
          handleCategoryFilter={handleCategoryFilter}
        />
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductItem}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        numColumns={2}
      />
    </View>
  );
};
export default PopularProd;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  offerText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 10,
    padding: 10,
    flex: 1,
    margin: 4,
  },
  title: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#666",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 5,
    resizeMode: "contain",
  },
});
