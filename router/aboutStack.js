import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from "../screens/about";

const { Navigator, Screen } = createStackNavigator();

export default function AboutStack() {
  return (
    <Navigator screenOptions={{ headerStyle: { backgroundColor: "red" } }}>
      <Screen name="About" component={About} />
    </Navigator>
  );
}
