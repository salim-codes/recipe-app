import React from 'react'
import {ScrollView} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const ScrollViewRecipes = props => (
  <ScrollView>
    {props.recipes.map(recipe => <Row {...recipe} />)}
  </ScrollView>
)

ScrollViewRecipes.propTypes = {
  recipes: PropTypes.array,
}

export default ScrollViewRecipes
