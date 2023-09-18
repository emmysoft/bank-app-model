import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomInput from "../../components/CustomInput";
import { LoginButton } from "../../components/CustomButton";

const SignIn = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [token, setToken] = useState(null);

  const handleSubmit = async () => {
    try {
      await AsyncStorage.setItem("token", username);
      if (username && password) {
        navigation.navigate("Welcome");
      }
    } catch (error) {
      console.log(error, "error logging in");
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
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Password</Text>
            <CustomInput
              placeholder="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
          </View>
          <LoginButton style={styles.loginButton} onPress={handleSubmit}>
            Login
          </LoginButton>
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
  otherlinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 80,
  },
  otherlinkStyles: {
    color: "#abc6c4",
    fontWeight: 400,
    fontSize: 17,
  },
});
