import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

import AccountDetails from "./features/AccountDetails/AccountDetails";
import SignIn from "./features/Auth/SignIn";
import Notifications from "./features/Notifications/Notifications";
import Withdraw from "./features/Withdraw/Withdraw";
import Add from "./features/AddMoney/Add";
import Transfer from "./features/Transfer/Transfer";
import Profile from "./features/Profile/Profile";
import Settings from "./features/Settings/Settings";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function Welcome() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Account"
          component={AccountDetails}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Ionicons name="wallet-outline" size={30} color={"#abc6c4"} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            headerStyle: { backgroundColor: "#abc6c4" },
            tabBarIcon: () => (
              <Ionicons
                name="notifications-outline"
                size={30}
                color={"#abc6c4"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: { backgroundColor: "#abc6c4" },
            tabBarIcon: () => (
              <Ionicons name="person-outline" size={30} color={"#abc6c4"} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            headerStyle: { backgroundColor: "#abc6c4" },
            tabBarIcon: () => (
              <Ionicons name="settings-outline" size={30} color={"#abc6c4"} />
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
      <StatusBar style="auto" />
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
            options={{ headerStyle: { backgroundColor: "#abc6c4" } }}
          />
          <Stack.Screen
            name="Withdraw"
            component={Withdraw}
            options={{ headerStyle: { backgroundColor: "#abc6c4" } }}
          />
          <Stack.Screen
            name="Transfer"
            component={Transfer}
            options={{ headerStyle: { backgroundColor: "#abc6c4" } }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
