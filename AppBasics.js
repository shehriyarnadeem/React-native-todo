import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";

export default function App() {
  // const [name, setName] = useState("shaun");
  // const [age, setAge] = useState("30");
  // const clickHandler = string => {
  //   setName(string);
  // };
  // return (
  //   <View style={styles.container}>
  //     <Text>Enter name :</Text>
  //     <TextInput
  //       style={styles.input}
  //       placeholder="e.g John doe"
  //       onChangeText={val => setName(val)}
  //     />
  //     <View style={styles.header}>
  //       <Text style={styles.boldText}>{name}</Text>
  //     </View>
  //     <View style={styles.header}>
  //       <Text style={styles.boldText}>{age}</Text>
  //     </View>
  //   </View>
  // );

  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "boshi", id: "3" },
    { name: "zoshi", id: "4" },
    { name: "noshi", id: "5" },
    { name: "hoshi", id: "6" },
    { name: "koshi", id: "7" },
    { name: "zoshi", id: "8" },
    { name: "noshi", id: "9" },
    { name: "hoshi", id: "10" }
  ]);

  const pressHandler = id => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    });
    console.log(id);
  };

  return (
    <View style={styles.container}>
      {/* Scroll list view */}
      {/* <ScrollView>
        {people.map(item => (
          <View style={styles.item} key={item.key}>
            <Text>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}

      {/* Flatlist View */}

      <FlatList
        numColumns={3}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: "center",
    // justifyContent: "center"
  },
  header: {
    width: 80,
    height: 60,
    backgroundColor: "yellow",
    padding: 20
  },
  header2: {
    width: 80,
    height: 60,
    backgroundColor: "pink",
    padding: 20
  },
  buttonContainer: {
    marginTop: 20
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 0,
    margin: 10,
    width: 200
  },
  item: {
    padding: 30,
    backgroundColor: "blue",
    fontSize: 24,
    flex: 1,
    marginTop: 12
  }
});
