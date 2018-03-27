import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PokeList from "./components/PokeList";
import PokeView from "./components/PokeView";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
  }

  render() {
    const { showDetails } = this.state;

    return (
      <View style={styles.container}>
        {showDetails ? <PokeView /> : <PokeList />}
        <Button
          onPress={() =>
            this.setState(prev => ({ showDetails: !prev.showDetails }))
          }
          title="Toggle"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
