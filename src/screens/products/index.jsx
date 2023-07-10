import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";
import { Input } from "../../components";
import PRODUCTS from "../../constants/data/products.json";
import { COLORS } from "../../themes";

function Products({ onHandleGoBack, categoryId }) {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [borderColor, setBorderColor] = useState(COLORS.primary);
  const onHandlerBlur = () => {};
  const onHandlerChangeText = (text) => {
    setSearch(text);
    filterBySearch(text);
  };
  const onHandlerFocus = () => {};

  const filteredProductsByCategory = PRODUCTS.filter(
    (product) => product.categoryId === categoryId
  );

  const filterBySearch = (query) => {
    let updatedProductList = [...filteredProductsByCategory];
    updatedProductList = updatedProductList.filter((product) => {
      return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredProducts(updatedProductList);
  };
  const clearSearch = () => {
    setSearch("");
    setFilteredProducts([]);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back-circle" size={25} color={COLORS.black} />
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Input
          borderColor={borderColor}
          onHandlerBlur={onHandlerBlur}
          onHandlerChangeText={onHandlerChangeText}
          onHandlerFocus={onHandlerFocus}
          value={search}
          placeholder="Search"
        />
        {/* <Ionicons name="search-circle" size={40} color={COLORS.text} /> */}
        {search.length > 0 && (
          <Ionicons onPress={clearSearch} name="close-circle" size={40} color={COLORS.black} />
        )}
      </View>
      <FlatList
        style={styles.productos}
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
      />
      {filteredProducts.length === 0 && search.length>0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}> No Products Found</Text>
        </View>
      )}
    </View>
  );
}

export default Products;
