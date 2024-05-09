import { StyleSheet, View } from 'react-native'
import React from 'react'
import Specialoffer from '../components/Specialoffer'
import Navbar from '../components/Navbar'
import { SafeAreaView } from 'react-native-safe-area-context'

const SpecialOffer = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.subContainer}>
        <Navbar title="Special Offers"/>        
        <View style={styles.offers}>
          <Specialoffer
            percentage="30%"
            category="Women Trousers"
            description="vigation prop into the component directly, or don't want to pass it in case of a deeply nested child."
            style={styles.Specialoffer}
          />
          <Specialoffer
            percentage="25%"
            category="Kid Clothes"
            description="vigation prop into the component directly, or don't want to pass it in case of a deeply nested child."
            style={styles.Specialoffer}
          />
          <Specialoffer
            percentage="40%"
            category="Men Jackets"
            description="vigation prop into the component directly, or don't want to pass it in case of a deeply nested child."
            style={styles.Specialoffer}
          />
          <Specialoffer
            percentage="20%"
            category="Women Dresses"
            description="vigation prop into the component directly, or don't want to pass it in case of a deeply nested child."
            style={styles.Specialoffer}
          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default SpecialOffer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1,
        display: "flex",
        flexDirection: "column",
      },
      subContainer: {
        flex: 1,
        marginTop: 10,
      },
      Specialoffer: {
        justifyContent: "center",
        alignItems: "center",
      },
      offers: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
      },
})