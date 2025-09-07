import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const SearchBar = ({ navigation }) => {
  const [array, setArray] = useState("");
  const contact = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Saif" },
    { id: 3, name: "Ahmed" },
    { id: 4, name: "Sara" },
    { id: 5, name: "Hina" },
    { id: 6, name: "Usman" },
    { id: 7, name: "Fatima" },
    { id: 8, name: "Bilal" },
    { id: 9, name: "Zara" },
    { id: 10, name: "Hamza" },
    { id: 11, name: "Ayesha" },
    { id: 12, name: "Imran" },
    { id: 13, name: "Nadia" },
    { id: 14, name: "Kashif" },
    { id: 15, name: "Mariam" },
  ];
  const contactFilter = contact.filter((i) =>
    i.name.toLowerCase().includes(array.toLowerCase())
  );
  const handleSelect = (name) => {
    setArray(name);
  };
  return (
    <View style={styles.container}>
      <View style={styles.first}>
        <Text style={styles.text}>C O N T A C T {"  "} L I S T</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            style={{
              height: 40,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: "white",
              backgroundColor: "white",
              paddingHorizontal: 16,
              marginTop: 20,
              color: "green",
              fontSize: 16,
              flex: 1,
            }}
            placeholder="Search "
            value={array}
            onChangeText={setArray}
          />
        </View>
        <FlatList
          data={contactFilter}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => handleSelect(item.name)}
              style={{
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
                marginTop: 10,
                backgroundColor: "white",
              }}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("HomeScreen");
        }}
        style={{
          borderRadius: 10,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 30,
          height: 30,
          marginHorizontal: 20,
          marginTop: 10,
        }}
      >
        <MaterialCommunityIcons
          name="skip-next-outline"
          size={30}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  first: {
    marginHorizontal: 16,
    marginTop: 30,
  },
  text: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
    color: "white",
  },
});
export default SearchBar;
