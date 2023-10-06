import { Alert, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomInput from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseconfig";

const SignIn = () => {
  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const [token, setToken] = useState(null);

  // const handleSubmit = async () => {
  //   try {
  //     await AsyncStorage.setItem("token", email);
  //     if (email && password) {
  //       navigation.navigate("Welcome");
  //     }
  //   } catch (error) {
  //     console.log(error, "error logging in");
  //   }
  // };

  //firebase auth

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      // console.log(response);
      Alert.alert("Login Successful" + response)
      navigation.navigate("Welcome")
    } catch (error) {
      // console.log(error)
      Alert.alert("Wrong email and password" + error.msg)
    } finally {
      setLoading(false);
    }
  }

  // const handleForgotPassword = async () => {
  //   try {
  //     const res = await passw
  //   }
  // }

  return (
    <>
      <View style={styles.loginPage}>
        <Text style={styles.loginHeader}>Welcome To Nuda Bank</Text>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.userContainer}>
            <Text style={styles.userText}>Email</Text>
            <CustomInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Password</Text>
            <CustomInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              maxLength={8}
            />
          </View>
          <CustomButton style={styles.loginButton} onPress={handleLogin}>
            Login
          </CustomButton>
          <View style={styles.otherlinks}>
            <Text
              style={styles.otherlinkStyles}
              onPress={() => navigation.navigate("Register")}
            >
              Sign Up
            </Text>
            <Text style={styles.otherlinkStyles}>Forgot Password?</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    backgroundColor: "#1dcf9f",
  },
  loginHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontWeight: 500,
    color: "#fff",
    // flex: 1,
    margin: "auto",
    marginVertical: 70,
    marginHorizontal: 60,
  },
  loginContainer: {
    borderRadius: 10,
    backgroundColor: "#fff",
    border: "2px solid #fff",
    padding: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    marginHorizontal: 20,
    marginVertical: 80,
  },
  loginText: {
    fontWeight: 500,
    fontSize: 28,
    color: "#1dcf9f",
    textAlign: "center",
  },
  userContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  userText: {
    fontWeight: 400,
    fontSize: 20,
    color: "#1dcf9f",
    marginHorizontal: 8,
  },
  passwordContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  passwordText: {
    fontWeight: 400,
    fontSize: 20,
    color: "#1dcf9f",
    marginHorizontal: 8,
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: "#1dcf9f",
    borderRadius: 8,
  },
  otherlinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 80,
  },
  otherlinkStyles: {
    color: "#1dcf9f",
    fontWeight: 400,
    fontSize: 17,
  },
});
