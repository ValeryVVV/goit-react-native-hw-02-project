import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import im from "./";
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";

const image = { uri: "." };

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </View>
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
