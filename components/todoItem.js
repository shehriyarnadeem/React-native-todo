import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
export default function TodoItem({ items, pressHandle }) {
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.text}>{items.text}</Text>
        <MaterialIcons
          name="delete"
          size={18}
          color="#333"
          onPress={() => pressHandle(items.key)}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row"
  },
  text: {
    flex: 1
  }
});
