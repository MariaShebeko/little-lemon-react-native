import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import MenuScreen from "../screens/MenuScreen";
import UserSettingsScreen from "../screens/UserSettingsScreen";
import CustomersScreen from "../screens/CustomersScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Customers">
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
      <Stack.Screen name="UserSettings" component={UserSettingsScreen} />
      <Stack.Screen name="Customers" component={CustomersScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
