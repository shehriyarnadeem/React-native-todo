import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>One</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "flex-start",
    paddingTop: 40,
    backgroundColor: "#ddd"
  },
  boxOne: {
    // flex: 1,
    backgroundColor: "gold",
    padding: 10
  },
  boxTwo: {
    // flex: 1,
    backgroundColor: "silver",
    padding: 20
  },
  boxThree: {
    // flex: 1,
    backgroundColor: "blue",
    padding: 30
  },
  boxFour: {
    // flex: 1,
    backgroundColor: "yellow",
    padding: 40
  }
});
