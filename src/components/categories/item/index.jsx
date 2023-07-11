import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight, Text, View, useWindowDimensions } from "react-native/";

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
  const { width, height } = useWindowDimensions();
  const isTablet = width > 650;
  return (
    <TouchableHighlight
      onPress={() => onSelectCategory(id)}
      style={[styles.container, { backgroundColor }]}
      underlayColor={COLORS.primary}>
      <View style={isTablet ? styles.imageBackgroundTablet : styles.contentContainer}>
        <Ionicons name={iconName} size={100} color="black" style={styles.icon} />
        {/* <ImageBackground
        source={{ uri: backgroundImage }}
        style={styles.imageBackground}
        resizeMode="cover"> */}
        <Text style={isTablet ? styles.categoryNameTablet : styles.categoryName}>{name}</Text>
      </View>
      {/* </ImageBackground> */}
    </TouchableHighlight>
  );
};

export default CategoryItem;
