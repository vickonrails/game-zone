import React from "react";
import { Alert, Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

import { globalStyles } from "../styles/global";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ body: "" }}
        onSubmit={(values) => {
          addReview(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={handleChange("title")}
              value={values.title}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={handleChange("body")}
              value={values.body}
            />

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review (1-5)"
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="numeric"
            />

            <Button title="Submit" onPress={handleSubmit} color="maroon" />
          </View>
        )}
      </Formik>
    </View>
  );
}
