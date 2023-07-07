import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import RNPaystack from "react-native-paystack";

import CustomInput from "../../components/CustomInput";
import { TransferButton } from "../../components/CustomButton";
import { API_KEY } from "../../util/api";

const Transfer = () => {
  const [amount, setAmount] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [comment, setComment] = useState("");

  const handleChange = () => {
    axios.get("https://nigerianbanks.xyz");
  };

  const initialliazePayment = async () => {
    try {
      const publickey = API_KEY;
      RNPaystack.initialize(publickey);

      const paymentParams = {
        amountInKobo: 500000,
        email: 'testemmy1@gmail.com',
        metadata: {
          custom_fields: [
            {
              display_name: 'First Name',
              variable_name: 'first_name',
              value: "Emmanuel",
            },
            {
              display_name: "Last Name",
              variable_name: 'last_name',
              value: "Oni",
            }
          ]
        }
      }

      const response = await RNPaystack.chargeCard(paymentParams);
      console.log(response);
    } catch (error) {
      console.log('Payment failed:', error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.transferForm}>
        <Text>Amount</Text>
        <CustomInput
          placeholder="100,000"
          value={amount}
          setValue={() => setAmount()}
        />
      </View>
      <View style={styles.transferForm}>
        <Text>Bank Name</Text>
        <CustomInput placeholder="Banks" setValue={handleChange} />
      </View>
      <View style={styles.transferForm}>
        <Text>Account Number</Text>
        <CustomInput
          placeholder="9022803260"
          value={accountNumber}
          setValue={() => setAccountNumber()}
        />
      </View>
      <View style={styles.transferForm}>
        <Text>Remarks</Text>
        <CustomInput
          placeholder="why are you sending"
          value={comment}
          setValue={() => setComment()}
        />
      </View>
      <TransferButton
        style={styles.transBtn}
        onPress={initialliazePayment}
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
    gap: 10,
    padding: 40,
  },
  transBtn: {
    width: 300,
    height: 50,
    backgroundColor: "#abc6c4",
    borderRadius: 8,
  },
  transferForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  transferText: {
    fontWeight: 400,
    fontSize: 20,
    color: "#000",
  },
});
