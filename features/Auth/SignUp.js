import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseconfig';

import CustomInput from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../redux/authSlice';

const SignUp = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const auth = FIREBASE_AUTH;

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    dispatch(setLogin({
      fullName: fullName,
      userName: userName,
      loggedIn: true,
    }))
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(auth.currentUser).catch((err) => console.log(err));
      await updateProfile(auth.currentUser, { displayName: userName }).catch((err) => console.log(err))
      console.log(response);
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
    <View style={styles.registerpage}>
      <View style={styles.regForm}>
        <Text style={styles.regHeader}>SignUp</Text>

        <View style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 12 }}>
          <CustomInput placeholder="Full Name" value={fullName} onChangeText={(text) => setFullName(text)} />
          <CustomInput placeholder="username" value={userName} onChangeText={(text) => setUserName(text)} />
          <CustomInput placeholder="email" value={email} onChangeText={(text) => setEmail(text)} />
          <CustomInput placeholder="password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} maxLength={10} />
        </View>

        <CustomButton style={styles.regButton} onPress={handleRegistration}>
          SignUp
        </CustomButton>
        <View style={styles.otherlinks}>
          <Text style={styles.otherlinkStyles}>Already have an account? </Text>
          <Text style={styles.otherlinkStyles} onPress={() => navigation.navigate("Welcome to Nuda Bank")} />
        </View>
      </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  registerpage: {
    flex: 1,
    backgroundColor: "#0c104f"
  },
  regForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 24,
    backgroundColor: "#fff",
    borderRadius: 10,
    border: "2px solid #fff",
    margin: "auto",
    marginVertical: 80,
    marginHorizontal: 20,
    padding: 24,
  },
  regHeader: {
    fontWeight: "500",
    fontSize: 24,
    color: "#0c104f",
    textAlign: "center",
  },
  regButton: {
    backgroundColor: "#0c104f",
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
    color: "#0c104f",
    fontWeight: 400,
    fontSize: 17,
  },
})