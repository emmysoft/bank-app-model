import { View, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Feature = () => {
  return (
    <>
      <View style={styles.features}>
        <View style={styles.featRow}>
          <View style={styles.funcFeat}>
            <Ionicons name="phone-portrait" size={24} color={"#fff"} />
            <Text style={styles.funcText}>Airtime</Text>
        
    
            <Ionicons name="tv-outline" size={24} color={"#fff"} />
            <Text style={styles.funcText}>TV</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="globe-outline" size={24} color={"#fff"} />
            <Text style={styles.funcText}>Data</Text>

            <Ionicons name="cash" size={24} color={"#fff"} />
            <Text style={styles.funcText}>Bills</Text>
          </View>
          <View style={styles.funcFeat}>
            <Ionicons name="football-outline" size={24} color={"#fff"} />
            <Text style={styles.funcText}>Betting</Text>

            <Ionicons name="earth-outline" size={24} color={"#fff"} />
            <Text style={styles.funcText}>Internet</Text>
          </View>
        </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  features: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    gap: 40,
    borderRadius: 10,
    backgroundColor: "#1dcf9f",
    border: "1px solid #1dcf9f",
    padding: 50,
  },
  funcFeat: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  funcText: {
    color: "#fff",
  },
  featRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 35,
  },
});

export default Feature;
