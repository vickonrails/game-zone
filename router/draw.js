import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";

const { Navigator, Screen } = createDrawerNavigator();

export default function RootDrawerNavigator() {
  return (
    <Navigator>
      <Screen name="Home" component={HomeStack} />
      <Screen name="About" component={AboutStack} />
    </Navigator>
  );
}
