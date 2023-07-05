import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Notifications = () => {
  return (
    <View style={styles.notificationPage}>
      <Ionicons name="notifications-outline" size={200} color={"#808080"} />
      <Text style={styles.notifyText}>No Notifications Yet!</Text>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  notificationPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 70,
    marginVertical: 150
  },
  notifyText: {
    color: "#808080",
    fontSize: 24,
    fontWeight: 300,
  },
});
