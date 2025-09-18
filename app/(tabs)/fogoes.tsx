import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FogoesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Fogões</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c3e50",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#fff",
  },
});

export default FogoesScreen;
