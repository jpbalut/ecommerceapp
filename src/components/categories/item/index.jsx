import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight, Text, View } from "react-native/";

import { styles } from "./styles";
import { COLORS } from "../../../themes";

const CategoryItem = ({
  id,
  name,
  backgroundColor,
  iconName,
  // backgroundImage,
  onSelectCategory,
}) => {
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
      underlayColor={COLORS.primary}>
      <View style={styles.contentContainer}>
        <Ionicons name={iconName} size={100} color="black" style={styles.icon} />
        {/* <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.imageBackground}
        resizeMode="cover"> */}
        <Text style={styles.categoryName}>{name}</Text>
      </View>
      {/* </ImageBackground> */}
    </TouchableHighlight>
  );
};

export default CategoryItem;
