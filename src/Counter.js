import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { addition, subtraction } from "./store/action";

const Counter = (props) => {
  const data = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.MainView}>
      <View style={styles.button}>
        <Button title="AGREGAR" onPress={() => dispatch(addition())} />
      </View>
      <View>
        <Text>{data}</Text>
      </View>
      <View style={styles.button}>
        <Button title="QUITAR" onPress={() => dispatch(subtraction())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 12,
  },
});

export default Counter;
