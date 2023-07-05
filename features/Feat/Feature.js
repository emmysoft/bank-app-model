import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Feature = () => {
  return (
    <>
      <View style={styles.features}>
        <View style={styles.firstRow}>
          <View style={styles.funcFeat}>
            <Ionicons name="phone-portrait" size={24} color={"#000"} />
            <Text style={styles.funcText}>Airtime</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="globe-outline" size={24} color={"#000"} />
            <Text style={styles.funcText}>Data</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="football-outline" size={24} color={"#000"} />
            <Text style={styles.funcText}>Betting</Text>
          </View>
        </View>
        <View style={styles.secondRow}>
          <View style={styles.funcFeat}>
            <Ionicons name="tv-outline" size={24} color={"#000"} />
            <Text style={styles.funcText}>TV</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="cash" size={24} color={"#000"} />
            <Text style={styles.funcText}>Bills</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="earth-outline" size={24} color={"#000"} />
            <Text style={styles.funcText}>Internet</Text>
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
  secondRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 45,
    padding: 20,
    marginLeft: 40,
  },
  funcText: {
    alignItems: "center",
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
