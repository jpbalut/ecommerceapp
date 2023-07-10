import { StyleSheet } from "react-native";

import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: 5,
  },
  goBack: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  goBackText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: "bold",
  },
  products: {
    flex: 1,
  },
  notFound: {
    flex: 1,
    alignItems: "center",
  },
  notFoundText: {},
});
