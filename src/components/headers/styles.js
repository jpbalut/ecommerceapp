import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    // flex:1
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 4,
  },
  title: {
    fontSize: 20,
    color: COLORS.text,
    fontWeight: "bold",
  },
});
