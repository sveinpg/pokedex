import React from "react";
import { View, Image, Button, StyleSheet } from "react-native";

const PokeView = ({ id, handleClick }) => {
  return (
    <View>
      <Image
        source={{
          uri:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            id +
            ".png"
        }}
        style={styles.image}
      />
      <Button title="Back" onPress={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  }
});

export default PokeView;
