import { Pressable } from "react-native";
import { catpets_get_fact_read } from "./../../store/catPets/catpets_response_get_GetFacts.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled5 = ({
  navigation
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(catpets_get_fact_read());
  }, []); // entities update to get the code working

  const {
    entities: Catpets_response_get_GetFacts
  } = useSelector(state => state.Catpets_response_get_GetFacts); // Added optional chaining to  Catpets_response_get_GetFacts[0].fact to avoid undefined check

  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      height: '100%',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>
        
          <View style={styles.column1}><Text style={styles.kPuNrOfF}>Cat Fact of The Day</Text></View>
          <View style={styles.column2}><Text style={styles.BflSbOep}>{Catpets_response_get_GetFacts[0]?.fact}</Text><Pressable onPress={() => navigation.navigate("Untitled6", {
          fact: Catpets_response_get_GetFacts[0]?.fact
        })}><View style={styles.WzQJBiRn}><Text style={styles.IXYEdzez}>Next</Text></View></Pressable></View>
          
        
        </ScrollView>
      </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  column1: {
    flex: 1
  },
  column2: {
    flex: 1
  },
  column3: {
    flex: 1
  },
  kPuNrOfF: {
    width: 337,
    height: 50,
    lineHeight: 20,
    fontSize: 20,
    borderRadius: 0,
    textAlign: "center"
  },
  BflSbOep: {
    width: 327,
    height: 83,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    textAlign: "center"
  },
  WzQJBiRn: {
    height: 60,
    width: 140,
    backgroundColor: "#728fcb",
    borderRadius: 8,
    color: "#777777",
    alignSelf: "center"
  },
  IXYEdzez: {
    width: 100,
    height: 31,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    color: "#ffffff",
    textAlign: "center",
    position: "absolute",
    top: 14.5,
    left: 20
  }
});
export default Untitled5;