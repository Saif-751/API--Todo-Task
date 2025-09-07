import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ProductComponent from "../component/ProductComponent";
import Index from "../api/Index";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ActivityIndicator } from "react-native";

const Profile = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleproduct = async () => {
    try {
      const response = await Index.get("/product");
      setProducts(response.data);
    } catch (error) {
      console.log("wrong something", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleproduct();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 400,
        }}
      >
        <ActivityIndicator size="large" color="black" />
        <Text>Loading products...</Text>
      </View>
    );
  }
  return (
    <View style={{ backgroundColor: "cornsilk", flex: 1 }}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductComponent product={item} />}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("SearchBar");
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

const styles = StyleSheet.create({});
export default Profile;
