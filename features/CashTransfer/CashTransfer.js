import { StyleSheet, View, Text, Pressable } from "react-native";
import { useState } from "react";
import Toast from "react-native-root-toast";

import CustomInput from "../../components/CustomInput";
import { Paystack } from "react-native-paystack-webview";
import { API_KEY, PAYSTACK_API_KEY } from "../../util/api";
import { CustomButton } from "../../components/CustomButton";

const CashTransfer = () => {
  // const [balance, setBalance] = useState("1000.00")
  // const [newBalance, setNewBalance] = useState();

  const [pay, setPay] = useState(false);
  const [billingDetail, setBillingDetail] = useState({
    billingName: "",
    billingEmail: "",
    billingMobile: "",
    amount: "",
  });

  // const handleUpdateBalance = () => {
  //   const numericValue = parseFloat(setNewBalance);
  //   if (isNaN(numericValue)) {
  //     alert('enter a valid number');
  //     return;
  //   }
  //   setBalance((prevBalance) => prevBalance + numericValue);

  //   setNewBalance("");
  // }

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

        <CustomButton onPress={handleSubmit} style={styles.transferButton}>
          Transfer
        </CustomButton>

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
  // transBtn: {
  //   width: 300,
  //   height: 50,
  //   backgroundColor: "#0357ee",
  //   borderRadius: 8,
  // },
  transferButton: {
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 100,
    paddingVertical: 10,
    marginVertical: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#0357ee",
    shadowColor: "#0357ee",
    shadowOffset: 1,
    shadowOpacity: 1,
    backgroundColor: "#0357ee",
  },
  transferForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  transferText: {
    fontWeight: "400",
    fontSize: 20,
    color: "#000",
  },
});
