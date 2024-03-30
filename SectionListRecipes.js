import React from 'react'
import {SectionList, Text} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const renderItem = ({item}) => <Row {...item} />

const renderSectionHeader = ({section}) => <Text>{section.title}</Text>

const SectionListRecipes = props => {
  const recipesByLetter = props.recipes.reduce((obj, recipe) => {
  // const RecipeByLetter = props.Recipes.reduce((obj, Recipe) => {
    const firstLetter = recipe.name[0].toUpperCase()
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), recipe],
    }
  }, {})

  const sections = Object.keys(recipesByLetter).sort().map(letter => ({
    data: recipesByLetter[letter],
    title: letter,
  }))

  return <SectionList sections={sections} renderItem={renderItem} renderSectionHeader={renderSectionHeader} />
}

SectionListRecipes.propTypes = {
  recipes: PropTypes.array,
}

export default SectionListRecipes
