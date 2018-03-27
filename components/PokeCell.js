import React from "react";

import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

const PokeCell = ({ id, handleClick }) => {
  return (
    <TouchableOpacity onPress={() => handleClick(id)}>
      <Image
        source={{
          uri:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            id +
            ".png"
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#F5F5F5",
    margin: 5
  }
});

export default PokeCell;
