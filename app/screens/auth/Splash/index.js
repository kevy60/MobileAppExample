import { Text, View, Image } from "react-native";
import React from "react";
import { styles } from "./styles";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.image} source={require('../../../../assets/images/splash_image.png')} />
      <Text style={styles.title}>You'll Find</Text>
      <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
      <Text style={styles.title}>Here!</Text>
    </View>
  );
}

export default SplashScreen;
