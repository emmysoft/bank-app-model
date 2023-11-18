import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectLogin } from "../../redux/authSlice";
import { FIREBASE_AUTH } from "../../firebaseconfig";

const Profile = () => {

  const auth = FIREBASE_AUTH;
  // const user = useSelector(selectLogin);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.userDetails}>
          <Ionicons name="person" size={30} style={styles.avatar} />
          <View style={styles.details}>
            <View style={styles.name}>
              <Ionicons name="person-add-outline" size={20} color={"grey"} />
              <Text>{auth.currentUser?.displayName}</Text>
            </View>
            <View style={styles.sex}>
              <Ionicons name="person" size={20} color={"grey"} />
              <Text>Male</Text>
            </View>
            <View style={styles.job}>
              <Ionicons name="briefcase-outline" size={20} color={"grey"} />
              <Text>Employed</Text>
            </View>
            <View style={styles.accountVerification}>
              <Ionicons
                name="checkmark-circle-outline"
                size={20}
                color={"green"}
              />
              <Text>Verified</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.transactions}>
        <Text style={styles.transText}>Previous Transactions</Text>
        <Text style={styles.noTransaction}>'No Transactions Yet'</Text>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    border: "1px solid #fff",
    padding: 40,
    margin: 20,
  },
  userDetails: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 70,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 15
  },
  avatar: {
    borderRadius: 70,
    backgroundColor: "#808080",
    padding: 20,
  },
  name: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 10,
  },
  sex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 10,
  },
  job: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 10,
  },
  accountVerification: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: 10,
  },
  transactions: {
    backgroundColor: "#fff",
    borderRadius: 10,
    border: "1px solid #fff",
    padding: 40,
    margin: 20,
  },
  transText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: 400,
  },
  noTransaction: {
    fontWeight: 300,
    fontSize: 15,
    color: "#808080",
    textAlign: "center",
  },
});
