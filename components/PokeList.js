import React from "react";
import { View, Text } from "react-native";

import PokeCell from "./PokeCell";

const PokeList = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        paddingTop: 30
      }}
    >
      <PokeCell />
      <PokeCell />
      <PokeCell />
    </View>
  );
};

export default PokeList;
