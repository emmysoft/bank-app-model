import { StyleSheet, View, Text, Button, Alert, Platform } from "react-native";
import React, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: false,
      shouldGetBadge: false,
      shouldShowAlert: true,
    }
  }
})

const UserNotifications = () => {

  useEffect(() => {
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync();
      let finalStatus = status;

      if (finalStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert.alert("Permission required",
          "Allow this app to show you notifications",
        );
        return;
      }

      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log(pushTokenData)

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync('default', {
          name: "default",
          importance: Notifications.AndroidImportance.DEFAULT
        });
      }
    }
    configurePushNotifications();
  }, [])

  const handleNotifications = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "You have a notification",
        body: "Credit alert from ....",
        data: { userName: "Emmy" },
      },
      trigger: {
        seconds: 5,
      }
    })
  }

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener((notification) => {
      console.log("NOTIFICATION RECEIVED");
      console.log(notification);
      const userName = notification.request.content.data.userName;
      console.log(userName);
    });

    const subscription2 = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log("NOTIFICATION RESPONSE RECEIVED");
      console.log(response);
      const userName = response.request.content.data.userName;
      console.log(userName);
    })

    return () => {
      subscription1.remove();
      subscription2.remove();
    };
  }, []);

  const sendPushNotificationHandler = () => {
    fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        to: 'ExponentPushToken[PApQJkIrz179l2cgvQBUYx]',
        title: "Text - sent from a device",
        body: "This is a test!"
      })
    })
  }

  return (
    <View style={styles.notificationPage}>
      <Ionicons name="notifications-outline" size={200} color={"#808080"} />
      <Text style={styles.notifyText}>No Notifications Yet!</Text>
      <Button title="Schedule notification" onPress={handleNotifications} />
      <Button title="Send Push Notification" onPress={sendPushNotificationHandler} />
    </View>
  );
};

export default UserNotifications;

const styles = StyleSheet.create({
  notificationPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: 70,
    marginVertical: 150
  },
  notifyText: {
    color: "#808080",
    fontSize: 24,
    fontWeight: 300,
  },
});
