import { View, Text, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
// import WalletsAfrica from "wallets-africa-api";

import Feature from "../Feat/Feature";
import { useDispatch, useSelector } from "react-redux";
import { selectLogin, setLogout } from "../../redux/authSlice";
import { FIREBASE_AUTH } from "../../firebaseconfig";
// import { WALLETS_PUB_KEY, WALLETS_SEC_KEY } from "../../util/api";

const AccountDetails = ({ navigation }) => {
  const auth = FIREBASE_AUTH;
  const [balance, setBalance] = useState("1,000.00");

  const dispatch = useDispatch();
  const user = useSelector(selectLogin);

  const handleLogout = () => {
    dispatch(setLogout())
  }

  const handleBalance = async () => {
    setBalance(balance);
  };


  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((auth) => {
  //     // If the user is authenticated, update the Redux store
  //     if (auth) {
  //       dispatch(setLogin(auth));
  //     } else {
  //       // If the user is not authenticated, you might want to clear the user state
  //       dispatch(setLogin(null));
  //     }
  //   });

  //   // Clean up the subscription when the component unmounts
  //   return () => unsubscribe();
  // }, [dispatch]);

  return (
    <>
      <View style={styles.scroll}>
        <View style={styles.header}>
          <View style={styles.profilename}>
            <Text style={styles.title} onPress={() => navigation.navigate("Profile")}>Hello, {auth.currentUser?.displayName}</Text>
          </View>
          <View style={styles.headIcon}>
            <Ionicons
              name="notifications"
              size={24}
              color={"#0357ee"}
              style={styles.icon}
              onPress={() => navigation.navigate("Notifications")}
            />
            <Ionicons
              name="log-out"
              size={24}
              color={"#ff0000"}
              onPress={() => { navigation.navigate("Welcome to Nuda Bank"), handleLogout }}
              style={styles.logoutButn}
            />
          </View>
        </View>
        <View style={styles.accountBox}>
          <View style={styles.acctDetails}>
            <Text style={styles.uppercontent}>Account Balance:</Text>
            <Text style={styles.balance} onChange={handleBalance}>
              &#x20A6;{balance}
            </Text>
          </View>
          <View style={styles.functions}>
            <View style={styles.funcFeat}>
              <Ionicons
                name="add"
                size={20}
                color={"#fff"}
                onPress={() => navigation.navigate("Add Money")}
              />
              <Text onPress={() => navigation.navigate("Add Money")} style={{ color: "#fff" }}>
                Add Money
              </Text>
            </View>
            <View style={styles.funcFeat}>
              <Ionicons
                name="send"
                size={20}
                color={"#fff"}
                onPress={() => navigation.navigate("Cash Transfer")}
              />
              <Text onPress={() => navigation.navigate("Cash Transfer")} style={{ color: "#fff" }}>
                Transfer
              </Text>
            </View>
            <View style={styles.funcFeat}>
              <Ionicons
                name="book-outline"
                size={20}
                color={"#fff"}
                onPress={() => navigation.navigate("History")}
              />
              <Text onPress={() => navigation.navigate("History")} style={{ color: "#fff" }}>
                History
              </Text>
            </View>
          </View>
        </View>
        <Feature />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 30,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 24,
  },
  headIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  acctDetails: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    // marginTop: 20,
    marginHorizontal: 20,
  },
  logoutButn: {
    // marginTop: 20,
    marginHorizontal: 20,
  },
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontWeight: 500,
    fontSize: 20,
    color: "#000",
    width: "100%",
    // marginTop: 60,
    // marginBottom: 40,
    // marginLeft: 20,
  },
  profilename: {
    width: "50%",
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: 'flex-start',
  },
  accountBox: {
    backgroundColor: "#0357ee",
    border: "1px solid #0357ee",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    gap: 24,
    borderRadius: 10,
    padding: 40,
    marginTop: 20
  },
  uppercontent: {
    fontWeight: 300,
    fontSize: 15,
    color: "#fff",
  },
  balance: {
    fontWeight: 600,
    fontSize: 30,
    color: "#fff",
  },
  functions: {
    display: "flex",
    flexDirection: "row",
    justifyItems: "center",
    alignItems: "center",
    gap: 24,
  },
  funcFeat: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});

export default AccountDetails;
