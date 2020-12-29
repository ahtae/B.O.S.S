import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backgroundStyle: {
    marginTop: "10%",
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    borderRadius: 5,
    borderWidth: 1,
    textAlign: "center",
    backgroundColor: "white",
  },
  container: {
    marginTop: "15%",
    marginLeft: "5%",
    marginRight: "5%",
    padding: "1%",
  },
  input: {
    margin: "5%",
    borderRadius: 5,
    borderWidth: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: "3%",
    textAlign: "center",
  },
  imageStyle: {
    width: "25%",
    height: "20%",
    margin: 0,
    padding: 0,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    marginTop: 6,
  },
  textStyle: {
    color: "#d6f3ff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    paddingVertical: 7,
  },
  button: {
    backgroundColor: "#144d62",
    borderRadius: 25,
    width: "50%",
    marginHorizontal: 2,
    marginTop: "10%",
  },
});

export default styles;
