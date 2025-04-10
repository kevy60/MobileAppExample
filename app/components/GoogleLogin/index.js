import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

const GoogleLogin = () => {
    return(
        <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <Image style={styles.image} source={require("../../../assets/images/google.png")}/>
        </TouchableOpacity>
    )
}
export default React.memo(GoogleLogin);