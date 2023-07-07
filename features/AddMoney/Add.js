import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Add = () => {
  return (
    <>
      <View style={styles.addDetailsPage}>
        <Text style={styles.acctHead}>Your details</Text>
        <View style={styles.accountNum}>
          <Text>Account Number:</Text>
          <Text>8149998467</Text>
        </View>
        <View style={styles.accountName}>
          <Text>Name:</Text>
          <Text>Emmanuel Oni</Text>
        </View>
      </View>
    </>
  );
};

export default Add;

const styles = StyleSheet.create({
  addDetailsPage: {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    borderRadius: 8,
    margin: 20,
    padding: 24,
  },
  acctHead: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 34,
    margin: 20,
    width: "90%",
  },
  accountNum: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  accountName: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  }
});
