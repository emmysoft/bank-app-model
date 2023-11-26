import { Alert, StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
// import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomInput from "../../components/CustomInput";
import { CustomButton } from "../../components/CustomButton";
import { GoogleAuthProvider, sendEmailVerification, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { FIREBASE_AUTH } from "../../firebaseconfig";
// import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { selectLogin, setLogin, setSignUp } from "../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
// import { PAYSTACK_API_KEY } from "../../util/api";

const SignIn = () => {

  const auth = FIREBASE_AUTH;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const user = useSelector(selectLogin);

  const windowDimensions = Dimensions.get('window');
  const screenDimensions = Dimensions.get('screen');

  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  //firebase auth

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(setLogin({
      fullName: fullName,
      userName: displayName,
      email: email,
      loggedIn: true
    }));
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser).catch((err) => console.log(err));
      await updateProfile(auth.currentUser, { displayName: email }).catch((err) => console.log(err))
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

  // GoogleSignin.configure({
  //   webClientId: PAYSTACK_API_KEY,
  // })

  // const signInWithGoogle = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     await auth.signInWithCredential(googleCredential);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

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
              secureTextEntry={!isPasswordVisible}
              maxLength={15}
            />
            <Pressable onPress={handleToggle} style={{ position: 'absolute', right: 30, top: 47 }}>
              <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color={"#0357ee"} />
            </Pressable>
          </View>
          <CustomButton style={styles.loginButton} onPress={handleLogin}>
            {loading ? "Loading" : "Login"}
          </CustomButton>
          {/* <View>  
            <Ionicons name="logo-google" size={20} />
            <Ionicons name="logo-facebook" size={20} />
            <Ionicons name="logo-apple" size={20} />
          </View> */}
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

console.log({ windowHeight, windowWidth });

const styles = StyleSheet.create({
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
    fontWeight: 500,
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
    fontWeight: 500,
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
    fontWeight: 400,
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
    fontWeight: 400,
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
    fontWeight: 400,
    fontSize: 17,
  },
});
