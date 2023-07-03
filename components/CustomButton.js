import { Pressable, Text, StyleSheet } from "react-native";

export const LoginButton = ({ children, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export const TransferButton = ({ children, onPress, style }) => {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontWeight: 500,
    fontSize: 20,
    textAlign: "center",
    padding: 10,
  },
});
