import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 40,
    marginLeft: 15,
    fontFamily: "Roboto_300Light",
    textAlign: "center",
    fontSize: 25,
    backgroundColor: "white",
    marginBottom: 20,
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
  buttonText: {
    fontFamily: "Roboto_700Bold",
    color: "black",
    fontSize: 15,
  },
});

export default styles;
