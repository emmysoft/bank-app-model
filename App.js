import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import AccountDetails from "./features/AccountDetails/AccountDetails";
import SignIn from "./features/Auth/SignIn";
import UserNotifications from "./features/UserNotifications/UserNotifications";
import History from "./features/History/History";
import Add from "./features/AddMoney/Add";
import CashTransfer from "./features/CashTransfer/CashTransfer";
import Profile from "./features/Profile/Profile";
import Settings from "./features/Settings/Settings";
import SignUp from "./features/Auth/SignUp";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Welcome() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Wallet"
          component={AccountDetails}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="wallet-outline" size={30} color={"#1dcf9f"} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={UserNotifications}
          options={{
            headerStyle: { backgroundColor: "#1dcf9f" },
            tabBarIcon: () => (
              <Ionicons
                name="notifications-outline"
                size={30}
                color={"#1dcf9f"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: { backgroundColor: "#1dcf9f" },
            tabBarIcon: () => (
              <Ionicons name="person-outline" size={30} color={"#1dcf9f"} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerStyle: { backgroundColor: "#1dcf9f" },
            tabBarIcon: () => (
              <Ionicons name="settings-outline" size={30} color={"#1dcf9f"} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export function App() {
  return (
    <>
      <StatusBar style="#1dcf9f" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome to Nuda Bank"
            component={SignIn}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add Money"
            component={Add}
            options={{ headerStyle: { backgroundColor: "#1dcf9f" } }}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{ headerStyle: { backgroundColor: "#1dcf9f" } }}
          />
          <Stack.Screen
            name="Cash-Transfer"
            component={CashTransfer}
            options={{ headerStyle: { backgroundColor: "#1dcf9f" } }}
          />
          <Stack.Screen
            name="Register"
            component={SignUp}
            options={{ headerStyle: { backgroundColor: "#1dcf9f" } }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
