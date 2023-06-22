import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Feature = () => {
  return (
    <>
      <View style={styles.features}>
        <View style={styles.firstRow}>
          <View style={styles.funcFeat}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Text>Airtime</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Text>Data</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Text>Betting</Text>
          </View>
        </View>
        <View style={styles.firstRow}>
          <View style={styles.funcFeat}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Text>TV</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Text>Electricity</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Text>Internet</Text>
          </View>
        </View>
        <View style={styles.firstRow}>
          <View style={styles.funcFeat}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Text>Education</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Text>Transport</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="rocket" size={24} color={"#000"} />
            <Text>More</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  features: {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    padding: 24,
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
  funcFeat: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
export default Feature;
