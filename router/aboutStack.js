import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/about";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

export default function AboutStack({ navigation }) {
  return (
    <Navigator>
      <Screen
        name="About"
        component={About}
        options={{
          headerTitle: () => (
            <Header navigation={navigation} title="About GameZone" />
          ),
        }}
      />
    </Navigator>
  );
}
