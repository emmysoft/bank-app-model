import { Alert, StyleSheet, Text, View, Pressable, Dimensions, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ref, onValue } from 'firebase/database';
import { Ionicons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomInput from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH, database } from "../../firebaseconfig";
import { setLogin } from "../../redux/authSlice";
import { useDispatch } from "react-redux";

const SignIn = () => {

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const user = useSelector(selectLogin);

  const [userName, setUserName] = useState()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  //function for handling loading new screen with ActivityIndicator

  //handle visibility of password
  const handleToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  //firebase auth
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLogin({
      email: email,
      loggedIn: true
    }));
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      Alert.alert("Login Successful")
      navigation.navigate("Welcome")

      //function for handling loading new screen with ActivityIndicator
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsLoading(false);
    } catch (error) {
      console.log(error)
      Alert.alert("Wrong username/email and password")
    }
  }

  return (
    <>
      {/* {!loading ? */}
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
              secureTextEntry={!isPasswordVisible}
              maxLength={15}
            />
            <Pressable onPress={handleToggle} style={{ position: 'absolute', right: 30, top: 47 }}>
              <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color={"#0357ee"} />
            </Pressable>
          </View>



          <CustomButton style={styles.loginButton} onPress={handleLogin}>
            Login
            {isLoading && <ActivityIndicator size='large' color={"#0357ee"} style={styles.loader} />}
          </CustomButton>

          <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 25 }}>
            <Ionicons name="logo-google" size={20} />
            <Ionicons name="logo-facebook" size={20} />
            <Ionicons name="logo-apple" size={20} />
          </View>
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
  loader: {
    backgroundColor: "#0357ee",
  },
  loginPage: {
    flex: 1,
    backgroundColor: "#0357ee",
  },
  loginHeader: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24,
    fontWeight: "500",
    color: "#fff",
    // flex: 1,
    margin: "auto",
    marginVertical: 70,
    marginHorizontal: 60,
    textAlign: 'center',
  },
  loginContainer: {
    // width: Dimensions > 400 ? "70%" : "60%",
    // height: Dimensions > 718 ? "50%" : "60%",
    borderRadius: 10,
    backgroundColor: "#fff",
    border: "2px solid #fff",
    padding: 24,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    alignItems: "center",
    gap: 24,
    marginHorizontal: 20,
    // marginVertical: 20,
  },
  loginText: {
    fontWeight: "500",
    fontSize: 28,
    color: "#0357ee",
    textAlign: "center",
  },
  userContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  userText: {
    fontWeight: "400",
    fontSize: 20,
    color: "#0357ee",
    marginHorizontal: 8,
  },
  passwordContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  passwordText: {
    fontWeight: "400",
    fontSize: 20,
    color: "#0357ee",
    marginHorizontal: 8,
  },
  loginButton: {
    width: 300,
    height: 50,
    backgroundColor: "#0357ee",
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
    color: "#0357ee",
    fontWeight: "400",
    fontSize: 17,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
