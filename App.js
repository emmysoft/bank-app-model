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
import { Provider } from "react-redux";
import store from "./redux/store";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Welcome() {
  return (
    <>
      <Tab.Navigator screenOptions={{ tabBarStyle: { height: 60 }, tabBarActiveTintColor: '#0357ee', tabBarInactiveTintColor: '#808080' }}>
        <Tab.Screen
          name="Wallet"
          component={AccountDetails}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons name="wallet-outline" size={30} color={focused ? "#0357ee" : "#808080"} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={UserNotifications}
          options={{
            headerTitleStyle: { color: "#fff" },
            headerStyle: { backgroundColor: "#0357ee" },
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="notifications-outline"
                size={30}
                color={focused ? "#0357ee" : "#808080"}
              />
            ),
            headerTitleStyle: { color: "#fff" }
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerTitleStyle: { color: "#fff" },
            headerStyle: { backgroundColor: "#0357ee" },
            tabBarIcon: ({ focused }) => (
              <Ionicons name="person-outline" size={30} color={focused ? "#0357ee" : "#808080"} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerTitleStyle: { color: "#fff" },
            headerStyle: { backgroundColor: "#0357ee" },
            tabBarIcon: ({ focused }) => (
              <Ionicons name="settings-outline" size={30} color={focused ? "#0357ee" : "#808080"} />
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
      <StatusBar style="light" />
      <Provider store={store}>
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
              options={{ headerStyle: { backgroundColor: "#0357ee" }, headerTitleStyle: { color: "#fff" }, headerTintColor: "#fff" }}
            />
            <Stack.Screen
              name="History"
              component={History}
              options={{ headerStyle: { backgroundColor: "#0357ee" }, headerTitleStyle: { color: "#fff" }, headerTintColor: "#fff" }}
            />
            <Stack.Screen
              name="Cash Transfer"
              component={CashTransfer}
              options={{ headerStyle: { backgroundColor: "#0357ee" }, headerTitleStyle: { color: "#fff" }, headerTintColor: "#fff" }}
            />
            <Stack.Screen
              name="Register"
              component={SignUp}
              options={{ headerStyle: { backgroundColor: "#0357ee" }, headerTitleStyle: { color: "#fff" }, headerTintColor: '#fff' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default App;
