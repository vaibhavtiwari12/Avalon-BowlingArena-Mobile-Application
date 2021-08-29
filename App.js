import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{
        uri: "https://8f04-2401-4900-1c16-2d0a-2a05-77fc-6fba-cb6c.ngrok.io",
      }}
      style={{ marginTop: "10%" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
