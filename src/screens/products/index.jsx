import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacityBase,
} from "react-native";

import { styles } from "./styles";
import { Input } from "../../components";
import PRODUCTS from "../../constants/data/products.json";
import { COLORS } from "../../themes";

function Products({ onHandleGoBack, categorySelected }) {
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
    (product) => product.categoryId === categorySelected.categoryId
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
          <Ionicons
            style={styles.clearIcon}
            onPress={clearSearch}
            name="close-circle"
            size={25}
            color={COLORS.black}
          />
        )}
      </View>
      <FlatList
        style={styles.products}
        data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => null} style={styles.productContainer}>
            <ImageBackground
              source={{ uri: item.image }}
              style={[styles.productImage, { backgroundColor: categorySelected.color }]}
              resizeMethod="resize"
              resizeMode="contain"
            />
            <View style={styles.productDetail}>
              <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
                {item.name}
              </Text>
              <Text style={styles.productPrice}>{`${item.currency.code}$${item.price}`}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.productContent}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      {filteredProducts.length === 0 && search.length > 0 && (
        <View style={styles.notFound}>
          <Text style={styles.notFoundText}> No Products Found</Text>
        </View>
      )}
    </View>
  );
}

export default Products;
