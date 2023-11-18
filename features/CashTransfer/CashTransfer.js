import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import Toast from "react-native-root-toast";

import CustomInput from "../../components/CustomInput";
import { Paystack } from "react-native-paystack-webview";
import { API_KEY, PAYSTACK_API_KEY } from "../../util/api";

const CashTransfer = () => {
  // const [amount, setAmount] = useState("");

  const [pay, setPay] = useState(false);
  const [billingDetail, setBillingDetail] = useState({
    billingName: "",
    billingEmail: "",
    billingMobile: "",
    amount: "",
  });

  const handleOnchange = (text, input) => {
    setBillingDetail((prevState) => ({ ...prevState, [input]: text }));
  };

  const handleSubmit = () => {
    if (
      billingDetail.billingName &&
      billingDetail.billingEmail &&
      billingDetail.billingMobile &&
      billingDetail.amount
    ) {
      setPay(true);
    } else {
      Toast.show("Fill in all fields", {
        duration: Toast.durations.LONG,
      });
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.transferForm}>
          <CustomInput
            placeholder="name"
            value={billingDetail?.billingName}
            onChangeText={(text) => handleOnchange(text, "billingName")}
          />
          <CustomInput
            placeholder="email"
            value={billingDetail?.billingEmail}
            onChangeText={(text) => handleOnchange(text, "billingEmail")}
          />
          <CustomInput
            placeholder="mobile Number"
            value={billingDetail?.billingMobile}
            onChangeText={(text) => handleOnchange(text, "billingMobile")}
          />
          <CustomInput
            placeholder="amount"
            value={billingDetail?.amount}
            onChangeText={(text) => handleOnchange(text, "amount")}
          />
        </View>

        <Pressable onPress={handleSubmit} style={{ backgroundColor: "#0357ee", padding: 20, borderRadius: 8 }}>
          <Text style={{ color: "#fff" }}>Transfer</Text>
        </Pressable>

        {pay && (
          <View style={{ flex: 1 }}>
            <Paystack
              paystackKey={PAYSTACK_API_KEY}
              amount={billingDetail.amount}
              billingEmail={billingDetail.billingEmail}
              billingMobile={billingDetail.billingMobile}
              activityIndicatorColor="green"
              onCancel={(e) => {
                Toast.show("Transaction Cancelled!!", {
                  duration: Toast.durations.LONG,
                });
              }}
              onSuccess={(response) => {
                const responseObject = response["transactionRef"]["message"];
                if (responseObject === "Approved") {
                  Toast.show("Transaction Approved!!", {
                    duration: Toast.durations.LONG,
                  });
                }
              }}
              autoStart={pay}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default CashTransfer;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 80,
  },
  transferForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  transBtn: {
    width: 300,
    height: 50,
    backgroundColor: "#0357ee",
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
