import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const History = () => {
  return (
    <View style={styles.page}>
      <Ionicons name="book-outline" size={200} color={'grey'} />
      <Text style={styles.text}> No Transaction History Yet </Text>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
    marginVertical: 150,
  },
  text: {
    fontWeight: "300",
    fontSize: 24,
    color: "#808080",
  },
});
