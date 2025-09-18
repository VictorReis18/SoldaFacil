import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { open } from "react-native-file-viewer-turbo";
import { Asset } from "expo-asset";

const CalefatoresScreen = () => {
  const handleOpenFile = async () => {
    try {
      // 1. Resolve o asset do PDF
      const asset = Asset.fromModule(require("../../assets/files/teste.pdf"));

      // 2. Faz o download do asset se ainda não estiver no dispositivo
      await asset.downloadAsync();

      // 3. Abre o arquivo usando o caminho local
      if (asset.localUri) {
        await open(asset.localUri, { showOpenWithDialog: true });
      } else {
        Alert.alert("Erro", "Não foi possível encontrar o caminho do arquivo.");
      }
    } catch (error) {
      console.error("Erro ao abrir o arquivo:", error);
      Alert.alert("Erro", "Não foi possível abrir o arquivo PDF.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela de Calefatores</Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenFile}>
        <Text style={styles.buttonText}>Abrir teste.pdf</Text>
      </TouchableOpacity>
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
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#ff5722",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CalefatoresScreen;
