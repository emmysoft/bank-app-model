import { StyleSheet, Text, View } from "react-native";
import React from "react";
// import Rave from "react-native-rave-webview";

const Add = () => {

  return (
    <>
      <View style={styles.addDetailsPage} onPress={() => copyToClipBoard()}>
        <Text style={styles.acctHead}>Your details</Text>
        <View style={styles.accountNum}>
          <Text>Account Number:</Text>
          <Text>8149998467</Text>
        </View>
        <View style={styles.accountName}>
          <Text>Name:</Text>
          <Text>Emmanuel Oni</Text>
        </View>
        {/* <View style={styles.container}>
          <Rave
            buttonText='Pay Now'
            raveKey='<your-api-key-here>'
            amount={20000}
            billingEmail='ayoshokz@gmail.com'
            billingMobile='08101274387'
            billingName='Oluwatobi Shokunbi'
            ActivityIndicatorColor='green'
            onCancel={() => this.onCancel()}
            onSuccess={transactionRef => this.onSuccess(transactionRef)}
            btnStyles={{
              backgroundColor: 'green',
              width: 100,
              alignContent: 'center'
            }}
            textStyles={{ color: 'white', alignSelf: 'center' }}
            onError={() => {
              alert('something went wrong')
            }}
            txref='1234'
          />
        </View> */}
      </View>
    </>
  );
};

export default Add;

const styles = StyleSheet.create({
  addDetailsPage: {
    backgroundColor: "#fff",
    border: "1px solid #fff",
    borderRadius: 8,
    margin: 20,
    padding: 24,
  },
  acctHead: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 34,
    margin: 20,
    width: "90%",
  },
  accountNum: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  accountName: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  }
});
