import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../shared/button";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number from 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

import { globalStyles } from "../styles/global";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={reviewSchema}
        initialValues={{ body: "", title: "", rating: "" }}
        onSubmit={(values, actions) => {
          addReview(values);
          actions.resetForm();
        }}
      >
        {({
          handleSubmit,
          handleBlur,
          handleChange,
          values,
          touched,
          errors,
        }) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={handleChange("title")}
              value={values.title}
              onBlur={handleBlur("title")}
            />

            <Text style={globalStyles.errorText}>
              {touched.title && errors.title}
            </Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review body"
              onChangeText={handleChange("body")}
              value={values.body}
              onBlur={handleBlur("body")}
            />
            <Text style={globalStyles.errorText}>
              {touched.body && errors.body}
            </Text>

            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review (1-5)"
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="numeric"
              onBlur={handleBlur("rating")}
            />
            <Text style={globalStyles.errorText}>
              {touched.rating && errors.rating}
            </Text>

            {/* <Button title="Submit" onPress={handleSubmit} color="maroon" /> */}

            <FlatButton text="submit" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
