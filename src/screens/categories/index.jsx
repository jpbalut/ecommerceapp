import { FlatList, SafeAreaView, View } from "react-native";

import { styles } from "./styles";
import { CategoryItem } from "../../components";
import CATEGORIES from "../../constants/data/categories.json";

function Categories({ onSelectCategory }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          style={styles.categoryContainer}
          renderItem={({ item }) => <CategoryItem {...item} onSelectCategory={onSelectCategory} />}
          contentContainerStyle={styles.listCategory}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default Categories;
