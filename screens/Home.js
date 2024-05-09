import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import InfoSection from "../components/InfoSection";
import SearchScreen from "../components/Search";
import Specialoffer from "../components/Specialoffer";
import { useNavigation } from "@react-navigation/native";
import Category from "../components/Category";
import PopularProd from '../components/PopularProd'

const Home = () => {
  const navigation = useNavigation();

  const handleSpecialOffer = () =>{
    navigation.navigate("SpecialOffer")
  }
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <InfoSection />
        <SearchScreen />
        <View style={styles.offerText}>
            <Text style={{ fontSize: 20, fontWeight: "800" }}>
              Special offer
            </Text>
            <TouchableOpacity onPress={handleSpecialOffer}>
              <Text style={{ fontSize: 14, fontWeight: "600" }}>See All</Text>
            </TouchableOpacity>
          </View>
        <View style={styles.specialOffer}>
          <Specialoffer
            percentage="30%"
            category="Women Trousers"
            description="vigation prop into the component directly, or don't want to pass it in case of a deeply nested child."
            style={styles.Specialoffer}
          />
        </View>
        <Category/>
        <PopularProd/>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  offerText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 16,
    marginRight: 16,
  },
  specialOffer:{
    justifyContent: "center",
    alignItems: "center",
  },
  Specialoffer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
