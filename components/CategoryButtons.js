// CategoryButtons.js

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const CategoryButtons = ({ productTypes, selectedCategory, handleCategoryFilter }) => {
  return (
    <View style={styles.categoryContainer}>
      {productTypes.map((type, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.categoryButton, selectedCategory === type && styles.selectedCategory]}
          onPress={() => handleCategoryFilter(type)}
        >
          <Text style={[styles.categoryButtonText, selectedCategory === type && styles.selectedcategoryButtonText]}>{type}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 10,
  },
  categoryButton: {
    padding: 7,
    marginRight:5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  selectedCategory: {
    backgroundColor: "black",
  },
  categoryButtonText: {
    fontWeight: "bold",
    textTransform: "capitalize"
  },
  selectedcategoryButtonText: {
    color: "white",
    textTransform: "capitalize"
  }
});

export default CategoryButtons;
