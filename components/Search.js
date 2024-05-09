import React, { useState } from "react";
import { View, TextInput, FlatList, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import products from '../assets/products';
import { MaterialIcons } from '@expo/vector-icons';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [numColumns, setNumColumns] = useState(2); // Initial number of columns

  // Function to handle search
  const handleSearch = (text) => {
    const query = text.toLowerCase();
    const filteredData = products.filter(
      (item) =>
        item.prodGroup.toLowerCase().includes(query) ||
        item.prodType.toLowerCase().includes(query)
    );
    setSearchQuery(text);
    setSearchResults(filteredData);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  const screenWidth = Dimensions.get("window").width;

  const renderProductItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.description}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={handleSearch}
        />
        {searchQuery !== "" && (
          <TouchableOpacity style={styles.clearButton} onPress={clearSearch}>
            <MaterialIcons name="cancel" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>
      {searchResults.length > 0 && (
        <FlatList
          key={numColumns}
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProductItem}
          numColumns={numColumns}
          contentContainerStyle={{ paddingHorizontal: 5 }}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 0.4,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor:"#dedede"
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  clearButton: {
    padding: 10,
  },
  clearButtonText: {
    color: "red",
    fontSize: 20,
  },
  card: {
    backgroundColor: "#dedede",
    borderRadius: 8,
    elevation: 3,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginBottom: 10,
    width: "48%", // Adjust this value as needed
    alignItems: "center",
  },
  cardContent: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
  price: {
    marginTop: 5,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
});

export default SearchScreen;
