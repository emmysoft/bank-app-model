import { StatusBar } from "expo-status-bar";
import AccountDetails from "./features/AccountDetails/AccountDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Account"
            component={AccountDetails}
            options={{ headerStyle: { backgroundColor: "#abc6c4" } }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
