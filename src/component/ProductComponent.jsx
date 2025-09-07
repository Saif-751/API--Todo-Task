import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductComponent = ({ product }) => {
  return (
    <View
      style={{
        backgroundColor: "green",
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 16,
        marginBottom: 5,
        
      }}
    >
      <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
        <Text style={styles.Text}>{product.id}</Text>
        <Text style={styles.Text}>{product.name}</Text>
        <Text style={styles.Text}>{product.purchasePrice}</Text>

        <Text style={styles.Text}>{product.salePrice}</Text>
        <Text style={styles.Text}>{product.type}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: 16,
    fontWeight: "400",
    color: "white",
  },
});

export default ProductComponent;
