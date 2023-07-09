import { View, Text, Button } from "react-native";

import { styles } from "./styles";

function Products({ onHandleGoBack }) {
  return (
    <View style={styles.container}>
      <Button title="go back" onPress={onHandleGoBack} />
      <Text>Category Selected</Text>
    </View>
  );
}

export default Products;
