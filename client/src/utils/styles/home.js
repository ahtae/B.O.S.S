import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "65%",
    marginBottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontFamily: "Roboto_300Light",
    fontSize: 30,
    letterSpacing: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#5fb7fe",
    padding: "5%",
    marginVertical: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
    width: 300,
  },
  textSign: {
    fontFamily: "Roboto_700Bold",
    color: "black",
    fontSize: 15,
  },
});

export default styles;
