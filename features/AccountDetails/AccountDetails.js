import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Feature from "../Feat/Feature";

const AccountDetails = ({ navigation }) => {
  return (
    <>
      <ScrollView style={styles.scroll}>
        <View style={styles.header}>
          <Text style={styles.title}>Hello Emmanuel</Text>
          <View style={styles.headIcon}>
            <Ionicons
              name="notifications"
              size={24}
              color={"#000"}
              style={styles.icon}
              onPress={() => navigation.navigate("Notifications")}
            />
            <Ionicons
              name="log-out"
              size={24}
              color={"#ff0000"}
              onPress={() => navigation.navigate("Welcome to Nuda Bank")}
              style={styles.logoutButn}
            />
          </View>
        </View>
        <View style={styles.innerBox}>
          <View style={styles.acctDetails}>
            <Text style={styles.uppercontent}>Account Balance:</Text>
            <Text style={styles.balance}>&#x20A6;0.00</Text>
          </View>
          <View style={styles.functions}>
            <View style={styles.funcFeat}>
              <Ionicons
                name="add"
                size={20}
                color={"#000"}
                onPress={() => navigation.navigate("Add Money")}
              />
              <Text onPress={() => navigation.navigate("Add Money")}>
                Add Money
              </Text>
            </View>
            <View style={styles.funcFeat}>
              <Ionicons
                name="send"
                size={20}
                color={"#000"}
                onPress={() => navigation.navigate("Transfer")}
              />
              <Text onPress={() => navigation.navigate("Transfer")}>
                Transfer
              </Text>
            </View>
            <View style={styles.funcFeat}>
              <Ionicons
                name="arrow-down"
                size={20}
                color={"#000"}
                onPress={() => navigation.navigate("Withdraw")}
              />
              <Text onPress={() => navigation.navigate("Withdraw")}>
                Withdraw
              </Text>
            </View>
          </View>
        </View>
        <Feature />
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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
    marginTop: 30,
  },
  headIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    // gap: 3,
  },
  acctDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 4
  },
  icon: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  logoutButn: {
    marginTop: 20,
    marginHorizontal: 20,
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
    height: 250,
    borderRadius: 10,
    marginLeft: 60,
    padding: 40,
  },
  uppercontent: {
    fontWeight: 300,
    fontSize: 15,
    color: "#000",
  },
  balance: {
    fontWeight: 400,
    fontSize: 30,
    color: "#000",
  },
  functions: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
    gap: 24,
    padding: 22,
  },
  funcFeat: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default AccountDetails;
