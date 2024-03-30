import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Constants from 'expo-constants';

import Recipe, { compareNames } from './recipes';
import ScrollViewRecipes from './ScrollViewRecipes';
import FlatListRecipes from './FlatListRecipes';
import SectionListRecipes from './SectionListRecipes';
import AddRecipeForm from './AddRecipeForm';

export default class App extends React.Component {
  state = {
    showRecipes: true,
    showForm: false,
    Recipe: Recipe,
  };

  addRecipe = (newRecipe) => {
    this.setState((prevState) => ({
      showForm: false,
      recipes: [...prevState.recipes, newRecipe],
    }));
  };

  toggleRecipe = () => {
    this.setState((prevState) => ({ showRecipe: !prevState.showRecipes }));
  };

  sort = () => {
    this.setState((prevState) => ({
      recipes: prevState.recipes.sort(compareNames),
    }));
  };

  showForm = () => {
    this.setState({ showForm: true });
  };

  render() {
    if (this.state.showForm) return <AddRecipeForm onSubmit={this.addRecipe} />;
    return (
      <View style={styles.container}>
        <Button title="Toggle Recipes" onPress={this.toggleRecipes} />
        <Button title="Add Recipe" onPress={this.showForm} />
        {this.state.showRecipes && (
          <ScrollViewRecipes recipes={this.state.recipes} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
