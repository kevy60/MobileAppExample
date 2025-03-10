import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';
export const styles = StyleSheet.create({
    container: {
        padding: 24,
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
        height: "100%",
        borderWidth: 1,
    },
    agreeRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 14
    },
    agreeTextBold: {
        color: colors.blue,
        fontWeight: "bold",
        marginHorizontal: 14
    }
});