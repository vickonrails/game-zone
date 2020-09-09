import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ route }) {
  const { body, key, rating, title } = route.params;
  return (
    <View style={globalStyles.container}>
      <Text>{body}</Text>
      <Text>{key}</Text>
      <Text>{rating}</Text>
      <Text>{title}</Text>
    </View>
  );
}
