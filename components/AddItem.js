import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";

export default function AddItem({ addTodoHandler }) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Todo Item : </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g John doe"
        onChangeText={val => setText(val)}
      />
      <Button title="Save" onPress={() => addTodoHandler(text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#bbb",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10
  },
  container: {
    padding: 20
  },
  text: {
    padding: 10
  }
});
