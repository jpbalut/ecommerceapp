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
  TouchableHighlight,
} from "react-native";

import { styles } from "./styles";
import PRODUCTS from "../../constants/data/products.json";
import { COLORS } from "../../themes";

function ProductsDetails({ selectedProduct, onHandleGoBack }) {
  const producto = PRODUCTS.filter((elem) => elem.id === selectedProduct.id);
  console.log(producto[0].image);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.goBack} onPress={onHandleGoBack}>
        <Ionicons name="arrow-back-circle" size={25} color={COLORS.black} />
        <Text style={styles.goBackText}>Go Back</Text>
      </TouchableOpacity>
      <ImageBackground source={{ uri: producto[0].image }} style={styles.productImage} />
      <View style={styles.productTitle}>
        <Text style={styles.productTitleText}>{producto[0].name}</Text>
      </View>
      <View style={styles.productDescription}>
        <Text style={styles.productDescriptionText}>{producto[0].description}</Text>
      </View>
      <View style={styles.productPrice}>
        <Text style={styles.productPriceText}>
          {producto[0].currency.code}${producto[0].price}
        </Text>
      </View>
      <TouchableHighlight>
        {/* TERMINAR BOTON DE COMPRAR, SUBIR AL REPO Y SUBIR TAREA */}
        <Text>Comprar</Text>
      </TouchableHighlight>
      <View style={styles.tagContainer}>
        {producto[0].tags.length !== 0 && (
          <Text>
            Tags:
            {producto[0].tags.map((elem) => (
              <View style={styles.productTag}>
                <Text>{elem} </Text>
              </View>
            ))}
          </Text>
        )}
      </View>

      {/* {producto[0].features.length !== 0 && <Text> Features: {producto[0].features}</Text>} */}
    </View>
  );
}

export default ProductsDetails;
