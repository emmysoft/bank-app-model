import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import { TransferButton } from "../../components/CustomButton";

const Transfer = ({ navigation }) => {
  const [amount, setAmount] = useState();
  return (
    <View style={styles.container}>
      <CustomInput
        placeholder="amount"
        value={amount}
        setValue={() => setAmount()}
      />
      <TransferButton
        style={styles.transBtn}
        onPress={() => navigation.navigate("Account")}
      >
        Send Money
      </TransferButton>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    padding: 40,
  },
  transBtn: {
    width: 300,
    height: 50,
    backgroundColor: "#abc6c4",
    borderRadius: 8,
  },
});
