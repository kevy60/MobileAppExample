import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import Button from "../../../components/Button";

const SplashScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={require('../../../../assets/images/splash_image.png')} />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>Here!</Text>
      </View>

      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      <Pressable onPress={() => navigation.navigate("Sign In")}>
        <Text style={styles.signin}>Sign In</Text>
      </Pressable>
    </View>
  );
}

export default SplashScreen;
