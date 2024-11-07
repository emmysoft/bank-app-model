import { View, Text, StyleSheet, StatusBar, Alert } from "react-native";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { setLogout } from "../../redux/authSlice";
import { FIREBASE_AUTH, database } from "../../firebaseconfig";
// import { ref, onValue } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

import Feature from "../Feat/Feature";

const AccountDetails = ({ navigation }) => {

  //firebase get current user
  const auth = FIREBASE_AUTH;
  //handle balance cash state
  const [balance, setBalance] = useState("1,000.00");

  const handleBalance = async () => {
    setBalance(balance);
  };

  //handle logout state from redux toolkit
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogout())
  }

  // handle user data from database
  // const user = auth.currentUser;

  // if (user) {
  //   Alert.alert("user is logged in successfully")
  // } else {
  //   Alert.alert("user is not logged in")
  // }

  const [user, setUser] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user?.userName)
    });
    return unsubscribe;
  }, []);



  return (
    <>
      <View style={styles.scroll}>
        <StatusBar style="dark" barStyle={"dark-content"} />
        <View style={styles.header}>
          <View style={styles.profilename}>
            <Text
              style={styles.title}
              onPress={() => navigation.navigate("Profile")}
            >
              Hello, {user?.userName}
            </Text>
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
  )
};

export default AccountDetails;

const styles = StyleSheet.create({
  scroll: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    gap: 30,
    maxHeight: '100%',
    // padding: 12,
    height: '100%'
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
    fontWeight: "500",
    fontSize: 20,
    color: "#000",
    width: "200%",
    height: "auto",
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
    fontWeight: "300",
    fontSize: 15,
    color: "#fff",
  },
  balance: {
    fontWeight: "600",
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
})