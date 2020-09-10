import React, { useState } from "react";
import {
  Text,
  View,
  Button,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
} from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";

import Card from "../shared/card";
import ReviewForm from "./reviewForm";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [modalopen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "Lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 5,
      body: "Lorem ipsum",
      key: "2",
    },
    {
      title: "Not So 'Final' Fantasy",
      rating: 5,
      body: "Lorem ipsum",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalopen} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name="close"
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModalOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        data={reviews}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("ReviewDetails", item)}
            >
              <View style={globalStyles.titleText}>
                <Card>
                  <Text>{item.title}</Text>
                </Card>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContent: {
    flex: 1,
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 1,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
});
