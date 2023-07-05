import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import * as Keychain from "react-native-keychain";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomInput from "../../components/CustomInput";
import { LoginButton } from "../../components/CustomButton";

const SignIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem("token", username);
      if (username === "emmysoft" && password === "emmy123") {
        console.log("Success");
        navigation.navigate("Welcome");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.loginPage}>
        <Text style={styles.loginHeader}>Welcome To Nuda Bank</Text>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.userContainer}>
            <Text style={styles.userText}>Username</Text>
            <CustomInput
              placeholder="emmysoft123"
              value={username}
              setValue={setUsername}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Password</Text>
            <CustomInput
              placeholder="password"
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />
          </View>
          <LoginButton style={styles.loginButton} onPress={handleSubmit}>
            Login
          </LoginButton>
        </View>
      </View>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    backgroundColor: "#abc6c4",
  },
  loginHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontWeight: 500,
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
    // width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    marginHorizontal: 20,
    marginVertical: 80,
    // margin: "auto",
  },
  loginText: {
    fontWeight: 500,
    fontSize: 28,
    color: "#000",
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
    color: "#000",
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
    color: "#000",
    marginHorizontal: 8,
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: "#abc6c4",
    borderRadius: 8,
  },
});
