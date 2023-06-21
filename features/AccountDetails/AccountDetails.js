import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const AccountDetails = () => {
  return (
    <>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Welcome Emmanuel</Text>
        <View style={styles.innerBox}>
          <Text style={styles.uppercontent}>Account Balance:</Text>
          <Text style={styles.content}>$4375.65</Text>
        </View>
        <View style={styles.features}>
          <View style={styles.firstRow}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Ionicons name="rocket" size={24} color={"#000"} />
          </View>
          <View style={styles.firstRow}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Ionicons name="rocket" size={24} color={"#000"} />
          </View>
          <View style={styles.firstRow}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Ionicons name="rocket" size={24} color={"#000"} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: "#abc6c4",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignContent: "center",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 500,
    fontSize: 25,
    color: "#000",
    marginTop: 60,
    marginBottom: 40,
    marginLeft: 20,
  },
  innerBox: {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    width: "70%",
    borderRadius: 10,
    marginLeft: 60,
    padding: 40
  },
  uppercontent: {
    fontWeight: 300,
    fontSize: 25,
    color: "#000",
  },
  content: {
    fontWeight: 500,
    fontSize: 40,
    color: "#000",
  },
  features: {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    padding: 34,
    width: "70%",
    borderRadius: 10,
    marginLeft: 60,
    marginTop: 40,
  },
  firstRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
  },
});

export default AccountDetails;
