import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, TextArea, View} from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
    paddingBottom: 5,
    marginBottom: 10,
  },
})

export default class AddRecipeForm extends React.Component {
  state = {
    name: '',
    ingredients: '',
    instructions: '',
    isFormValid: false,
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name || this.state.ingredients !== prevState.ingredients || this.state.instructions !== prevState.instructions) {
      this.validateForm()
    }
  }

  getHandler = key => val => {
    this.setState({[key]: val})
  }

  handleNameChange = this.getHandler('name') // val => { this.setState({name: val}) }
  handleIngredientChange = this.getHandler('ingredients')
  handleInstructionChange = this.getHandler('instructions')

    /*
  handleNameChange = name => {
    this.setState({name})
  }
  */

  handlePhoneChange = phone => {
    if (+phone >= 0 && phone.length <= 10) {
      this.setState({phone})
    }
  }

  validateForm = () => {
    console.log(this.state)
    const names = this.state.name.split(' ')
    
    /*
    if (+this.state.phone >= 0 && this.state.phone.length === 10 && names.length >= 2 && names[0] && names[1]) {
      this.setState({isFormValid: true})
    } else {
      this.setState({isFormValid: false})
    }
    */
  }

  /*
  validateForm2 = () => {
    if (+this.state.phone >= 0 && this.state.phone.length === 10 && this.state.name.length >= 3) {
      return true
    } else {
      return false
    }
  }
  */

  handleSubmit = () => {
    this.props.onSubmit({...this.state})
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
        />
        <TextInput
          // keyboardType="numeric"
          style={styles.input}
          value={this.state.ingredients}
          onChangeText={this.handleIngredientsChange}
          placeholder="Ingredients"
        />
        <TextInput
          multiline={true}
          numberOfLines={4}
          // keyboardType="numeric"
          style={styles.input}
          value={this.state.instructions}
          onChangeText={this.handleInstructionsChange}
          placeholder="Instructions"
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    )
  }
}
