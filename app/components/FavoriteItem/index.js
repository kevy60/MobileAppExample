import React from "react";
import { Text, Image, Pressable, View} from "react-native";
import { styles } from "./styles";

const FavoriteItem = ({title, image, onPress, price}) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{uri: image}}/>
            <View style={styles.content}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image style={styles.icon} source={require("../../../assets/images/close.png")}/>
        </Pressable>
    )
}
export default React.memo(FavoriteItem);