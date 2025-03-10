import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginVertical: 54,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  innerTitle: {
    color: "#FCA34D",
    textDecorationLine: "underline",
    textAlign: "center"
  },
  container: {
    padding: 24,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderWidth: 1,
  },
  signin: {
    textAlign: "center",
    fontSize: 16,
    color: "#4F63AC",
    marginTop: 30,
    fontWeight: 700
  }
})
