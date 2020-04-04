import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddItem from "./components/AddItem";
import Sandbox from "./components/sandbox";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy coffee", key: "1" },
    { text: "Create app", key: "2" },
    { text: "Attend meeting", key: "3" },
    { text: "Stay at home", key: "4" },
    { text: "Learn a new skill", key: "5" }
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.key != key));
  };

  const addTodo = item => {
    if (item.length > 3) {
      setTodos(prevTodos => {
        return [...prevTodos, { text: item, key: Math.random().toString() }];
      });
    } else {
      Alert.alert("OOP!", "Todos must be over 3 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") }
      ]);
    }
  };
  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        {/* Header */}
        <Header />
        <View style={styles.content}>
          <AddItem addTodoHandler={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem items={item} pressHandle={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
