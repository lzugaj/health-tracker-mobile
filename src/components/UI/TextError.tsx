import React from "react";
import { StyleSheet, Text } from "react-native";

type TextErrorProps = {
  error: string | false | undefined;
}

export default function TextError({error}: TextErrorProps) {
  return <Text style={styles.error}>{error}</Text>
}

const styles = StyleSheet.create({
  error: {
    color: "#FF1E1E",
    marginLeft: 10,
    marginTop: -20,
    marginBottom: 10
  }
})