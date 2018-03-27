import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import PokeList from "./components/PokeList";
import PokeView from "./components/PokeView";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false,
      id: 0
    };
  }

  render() {
    const { showDetails, id } = this.state;

    return (
      <View style={styles.container}>
        {showDetails ? (
          <PokeView
            id={id}
            handleClick={() => this.setState({ showDetails: false })}
          />
        ) : (
          <PokeList
            handleClick={id => this.setState({ showDetails: true, id })}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: "center"
  }
});
