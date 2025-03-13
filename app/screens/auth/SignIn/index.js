import React, { useState } from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import { styles } from "./styles";
import Button from "../../../components/Button/index"
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const SignIn = () => {
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign In" />
            <Input label="Email" placeholder="JohnDoe@gmail.com"/>
            <Input isPassword label="Password" placeholder="*****"/>
            <Button style={styles.button} title="Sign In" />
            <Separator text="Or sign up with" />
            <GoogleLogin />
            <Text style={styles.footerText}>Already have an account?
                <Text style={styles.footerLink}>Sign In</Text>
            </Text>
        </View>
    )
}
export default SignIn;