import { StyleSheet, TextInput, View } from "react-native";

const CustomInput = ({ value, onChangeText, placeholder, secureTextEntry, maxLength }) => {
  return (
    <View style={styles.textinput}>
      <TextInput
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  textinput: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 20,
    padding: 15,
  },
});
