import { Alert, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomInput from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseconfig";
import { setLogin, setSignUp } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //firebase auth

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLogin({
      userName: userName,
      email: email,
      loggedIn: true
    }))
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser).catch((err) => console.log(err));
      await updateProfile(auth.currentUser, { displayName: userName }).catch((err) => console.log(err))
      console.log(response);
      Alert.alert("Login Successful")
      navigation.navigate("Welcome")
    } catch (error) {
      console.log(error)
      Alert.alert("Wrong username/email and password")
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <View style={styles.loginPage}>
        <Text style={styles.loginHeader}>Welcome to NuelPay</Text>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.userContainer}>
            <Text style={styles.userText}>Email</Text>
            <CustomInput
              placeholder="email"
              value={email}
              onChangeText={(text) => { setEmail(text) }}
            />
          </View>
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Password</Text>
            <CustomInput
              placeholder="password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              maxLength={10}
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
    backgroundColor: "#0c104f",
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
    textAlign: 'center',
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
    // marginVertical: 20,
  },
  loginText: {
    fontWeight: 500,
    fontSize: 28,
    color: "#0c104f",
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
    color: "#0c104f",
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
    color: "#0c104f",
    marginHorizontal: 8,
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: "#0c104f",
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
    color: "#0c104f",
    fontWeight: 400,
    fontSize: 17,
  },
});
