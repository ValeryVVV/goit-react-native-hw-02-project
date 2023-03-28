import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require("./register-image.png");

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={image}
          style={{ width: "40px", height: "30%" }}
        ></ImageBackground>
        <Text>Registration</Text>
      </View>
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
