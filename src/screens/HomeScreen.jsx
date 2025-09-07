import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomeScreen = ({ navigation }) => {
  const [array, setArray] = useState([]);
  const [text, setText] = useState("");
  const [counter, setCounter] = useState(1);

  const handleAdd = () => {
    if (!text.trim()) return;
    const idnumber = {
      id: counter.toString(),
      task: text,
      isCheck: false,
    };
    setArray([...array, idnumber]);
    setCounter(counter + 1);
    setText("");

    console.log(idnumber);
  };

  const handleDelete = (id) => {
    setArray(array.filter((i) => i.id !== id));
  };

  const handleToggle = (id) => {
    setArray(
      array.map((i) => (i.id === id ? { ...i, isCheck: !i.isCheck } : i))
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "cornsilk", paddingTop: 40 }}>
      <Text style={{ textAlign: "center", fontSize: 20, fontWeight: "700" }}>
        ADD and REMOVE Task
      </Text>

      <View
        style={{ marginHorizontal: 16, flexDirection: "row", marginTop: 20 }}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Enter task"
          style={{
            flex: 1,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "gray",
            height: 40,
            paddingHorizontal: 12,
            backgroundColor: "white",
          }}
        />
        <TouchableOpacity
          onPress={handleAdd}
          style={{
            marginLeft: 8,
            borderRadius: 10,
            height: 40,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <Text style={{ color: "white" }}>Add</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={array}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 16, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => handleToggle(item.id)}
              style={{
                flex: 1,
                marginTop: 10,
                padding: 10,
                borderRadius: 10,
                backgroundColor: item.isCheck ? "lightblue" : "#221b1b9d",
                borderColor: "white",
                borderWidth: 2,
              }}
            >
              <Text style={{ color: "white", fontWeight: "800" }}>
                {item.task}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handleDelete(item.id)}
              style={{
                marginTop: 10,
                marginLeft: 7,
                borderRadius: 10,
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
                width: 50,
                height: 40,
              }}
            >
              <AntDesign name="delete" size={20} color="white" />
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Profile");
        }}
        style={{
          borderRadius: 10,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
          height: 30,
          marginHorizontal: 20,
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

export default HomeScreen;
