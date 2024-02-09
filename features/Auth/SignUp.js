import { Alert, KeyboardAvoidingView, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_STORE } from '../../firebaseconfig';
import { Ionicons } from "@expo/vector-icons";

import CustomInput from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/authSlice';

const SignUp = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = FIREBASE_AUTH;
  const db = FIREBASE_STORE;

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false); //handle hide and see password

  const handleToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }

  //handle sign up with firebase auth
  const handleRegistration = async (e) => {
    e.preventDefault();
    dispatch(setLogin({
      fullName: fullName,
      userName: userName,
      loggedIn: true,
    }))
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const uid = userCredential.user.uid;
      await db.collection('users').doc(uid).set({
        userName,
        email
      });
      Alert.alert("We are glad you joined us" + response)
      navigation.navigate("Welcome")
    } catch (error) {
      console.log(error)
      Alert.alert("your account wasn't successfully created" + error)
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <View style={styles.registerpage}>
        <KeyboardAvoidingView behavior='padding'>
          <View style={styles.regForm}>
            <Text style={styles.regHeader}>Register Here!</Text>

            <View style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
              <CustomInput placeholder="Full Name" value={fullName} onChangeText={(text) => setFullName(text)} />
              <CustomInput placeholder="User Name" value={userName} onChangeText={(text) => setUserName(text)} />
              <CustomInput placeholder="email" value={email} onChangeText={(text) => setEmail(text)} />
              {/* <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", }}> */}
              <CustomInput placeholder="password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={!isPasswordVisible} maxLength={15} />
              <Pressable onPress={handleToggle} style={{ position: 'absolute', right: 30, top: 275 }}>
                <Ionicons name={isPasswordVisible ? "eye-off" : "eye"} size={24} color={"#0357ee"} />
              </Pressable>
              {/* </View> */}
            </View>

            <CustomButton style={styles.regButton} onPress={handleRegistration}>
              SignUp
            </CustomButton>
            <View style={styles.otherlinks}>
              <Text style={styles.otherlinkStyles} onPress={() => navigation.navigate("Welcome to Nuda Bank")}>Already have an account? </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  )
}

export default SignUp

const styles = StyleSheet.create({
  registerpage: {
    flex: 1,
    backgroundColor: "#0357ee"
  },
  regForm: {
    alignItems: 'center',
    gap: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    border: "2px solid #fff",
    marginVertical: 40,
    marginHorizontal: 20,
    padding: 20,
  },
  regHeader: {
    fontWeight: "500",
    fontSize: 24,
    color: "#0357ee",
    textAlign: "center",
  },
  regButton: {
    backgroundColor: "#0357ee",
    width: 300,
    height: 50,
    borderRadius: 8,
  },
  otherlinks: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  otherlinkStyles: {
    color: "#0357ee",
    fontWeight: 400,
    fontSize: 17,
  },
})