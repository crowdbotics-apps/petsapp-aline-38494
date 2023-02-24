import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = ({
  route
}) => {
  const {
    fact = "No Fact"
  } = route.params || {};
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.oTEsNhCx}>{fact}</Text></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  oTEsNhCx: {
    width: 313,
    height: 254,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  }
});
export default Untitled6;