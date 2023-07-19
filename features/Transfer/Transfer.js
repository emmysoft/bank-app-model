import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import PaystackWebView from "react-native-paystack-webview";

import CustomInput from "../../components/CustomInput";

const Transfer = () => {
  const [amount, setAmount] = useState();
  const [accountNumber, setAccountNumber] = useState();
  const [comment, setComment] = useState("");

  const handleChange = () => {
    axios.get("https://nigerianbanks.xyz");
  };

  return (
    <>
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
        <View>
          <PaystackWebView
            buttonText="Send Money"
            paystackKey="pk_test_852ce2f5227059c6713730f583faa1973f2dc514"
            amount={100000}
            billingEmail="emmanueloni45@gmail.com"
            billingMobile="08149998467"
            billingName="Emmnauel Oni"
            ActivityIndicatorColor="green"
            onSuccess={(tranRef) => console.log(tranRef)}
            oCancel={() => "something's wrong"}
          />
        </View>
        ;
      </View>
    </>
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
