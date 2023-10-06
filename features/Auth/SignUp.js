import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../firebaseconfig';

import CustomInput from '../../components/CustomInput';
import { CustomButton } from '../../components/CustomButton';

const SignUp = () => {

  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegistration = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      // console.log(response);
      Alert.alert("We are glad you joined us" + response)
      navigation.navigate("Welcome")
    } catch (error) {
      // console.log(error)
      Alert.alert("your account wasn't successfully created" + error.msg)
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.registerpage}>
      <View style={styles.regForm}>
        <Text style={styles.regHeader}>SignUp</Text>

        <CustomInput placeholder="email" value={email} onChangeText={(text) => setEmail(text)} secureTextEntry={false} />
        <CustomInput placeholder="password" value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} maxLength={8} />

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
    backgroundColor: "#1dcf9f"
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
    color: "#1dcf9f",
    textAlign: "center",
  },
  regButton: {
    backgroundColor: "#1dcf9f",
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
    color: "#1dcf9f",
    fontWeight: 400,
    fontSize: 17,
  },
})