import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import Feature from "../Feat/Feature";

const AccountDetails = ({ navigation }) => {
  const [balance, setBalance] = useState("0.00");

  const handleBalance = () => {
    setBalance(balance);
  };

  return (
    <>
      <View style={styles.scroll}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title} onPress={() => navigation.navigate("Profile")}>Hello Emmanuel</Text>
          </View>
          <View style={styles.headIcon}>
            <Ionicons
              name="notifications"
              size={24}
              color={"#1dcf9f"}
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
        <View style={styles.accountBox}>
          <View style={styles.acctDetails}>
            <Text style={styles.uppercontent}>Account Balance:</Text>
            <Text style={styles.balance} onChange={handleBalance}>
              &#x20A6;{balance}
            </Text>
          </View>
          <View style={styles.functions}>
            <View style={styles.funcFeat}>
              <Ionicons
                name="add"
                size={20}
                color={"#fff"}
                onPress={() => navigation.navigate("Add Money")}
              />
              <Text onPress={() => navigation.navigate("Add Money")} style={{ color: "#fff" }}>
                Add Money
              </Text>
            </View>
            <View style={styles.funcFeat}>
              <Ionicons
                name="send"
                size={20}
                color={"#fff"}
                onPress={() => navigation.navigate("Cash-Transfer")}
              />
              <Text onPress={() => navigation.navigate("Cash-Transfer")} style={{ color: "#fff" }}>
                Transfer
              </Text>
            </View>
            <View style={styles.funcFeat}>
              <Ionicons
                name="book-outline"
                size={20}
                color={"#fff"}
                onPress={() => navigation.navigate("History")}
              />
              <Text onPress={() => navigation.navigate("History")} style={{ color: "#fff" }}>
                History
              </Text>
            </View>
          </View>
        </View>
        <Feature />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
  },
  headIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  acctDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    // marginTop: 20,
    marginHorizontal: 20,
  },
  logoutButn: {
    // marginTop: 20,
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
    // marginTop: 60,
    // marginBottom: 40,
    // marginLeft: 20,
  },
  accountBox: {
    backgroundColor: "#1dcf9f",
    border: "1px solid #1dcf9f",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    gap: 24,
    borderRadius: 10,
    padding: 40,
    marginTop: 20
  },
  uppercontent: {
    fontWeight: 300,
    fontSize: 15,
    color: "#fff",
  },
  balance: {
    fontWeight: 600,
    fontSize: 30,
    color: "#fff",
  },
  functions: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
    gap: 24,
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
