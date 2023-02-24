import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

const pressed = () => {
  console.log("pressed");
};

const Profile = () => {
  return <ScrollView>
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>The First Pet</Text>
          
          </View>
          <View style={styles.subheaderContainer}>
            <Text style={styles.subheaderDetailText}>Details</Text>
          </View>
        </View>
        <View style={styles.mainBody}>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Name</Text>
            <Text style={styles.text}>Name</Text>
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Breed</Text>
            <Text style={styles.text}>Breed</Text>
          </View>
          <View style={styles.mt15}>
            <Text style={styles.textLabel}>Notes</Text>
            <Text style={styles.text}>Notes</Text>
          </View>
        </View>
        <View style={styles.btnSave}>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    flex: 1
  },
  mt15: {
    marginTop: 15,
    flex: 1,
    flexDirection: "row"
  },
  headerContainer: {
    flex: 1,
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center"
  },
  headerText: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold"
  },
  headerSubText: {
    marginTop: 5,
    fontSize: 12,
    color: "#1C1A19",
    opacity: 0.5
  },
  subheaderContainer: {
    marginTop: 15,
    marginBottom: 30,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#C4C4C4"
  },
  subheaderDetailText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  subheaderRemoveText: {
    fontSize: 14,
    color: "#FF6848"
  },
  textLabel: {
    fontSize: 14,
    marginLeft: 15,
    marginBottom: 5,
    fontWeight: "bold"
  },
  text: {
    marginBottom: 10,
    marginLeft: 20
  },
  mainBody: {
    flex: 1
  },
  btnSave: {
    display: "flex",
    alignSelf: "center",
    marginTop: 50,
    width: "80%"
  }
});
export default Profile;