import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
// import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import Feature from "../Feat/Feature";

const AccountDetails = ({ navigation }) => {
  // const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Hello Emmanuel</Text>
        <View style={styles.innerBox}>
          <Text style={styles.uppercontent}>Account Balance:</Text>
          <Text style={styles.content}>$4375.65</Text>
          <View style={styles.functions}>
            <View style={styles.funcFeat}>
              <Ionicons
                name="add"
                size={20}
                color={"#000"}
                onPress={() => navigation.navigate("add")}
              />
              <Text onPress={() => navigation.navigate("add")}>Add Money</Text>
            </View>
            <View style={styles.funcFeat}>
              <Ionicons
                name="send"
                size={20}
                color={"#000"}
                onPress={() => navigation.navigate("transfer")}
              />
              <Text onPress={() => navigation.navigate("transfer")}>
                Transfer
              </Text>
            </View>
            <View style={styles.funcFeat}>
              <Ionicons
                name="arrow-down"
                size={20}
                color={"#000"}
                onPress={() => navigation.navigate("withdraw")}
              />
              <Text onPress={() => navigation.navigate("withdraw")}>
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
    fontSize: 25,
    color: "#000",
  },
  content: {
    fontWeight: 500,
    fontSize: 40,
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
