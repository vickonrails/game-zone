import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="GameZone" />
          ),
        }}
      />
      <Screen name="ReviewDetails" component={ReviewDetails} />
    </Navigator>
  );
}
