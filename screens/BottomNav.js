import { StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./Home";
import Account from "./Account";
import Cart from "./Cart";
import Liked from "./Liked";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  const getIcon = (route, focused) => {
    switch (route.name) {
      case "Home":
        return focused ? (
          <Entypo name="home" size={26} color="black" />
        ) : (
          <AntDesign name="home" size={26} color="black" />
        );
      case "Cart":
        return focused ? (
          <Entypo name="shopping-cart" size={24} color="black" />
        ) : (
          <Ionicons name="cart-outline" size={28} color="black" />
        );
      case "Liked":
        return focused ? (
          <AntDesign name="heart" size={24} color="black" />
        ) : (
          <AntDesign name="hearto" size={24} color="black" />
        );
      case "Account":
        return focused ? (
          <MaterialCommunityIcons
            name="account-group"
            size={29}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons
            name="account-group-outline"
            size={29}
            color="black"
          />
        );
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => getIcon(route, focused),
        tabBarActiveTintColor: "black",
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarLabel: "Likes",
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
