import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'

const renderItem = ({item}) => <Row {...item} />

const FlatListRecipes = props => (
  <FlatList renderItem={renderItem} data={props.recipes} />
)

FlatListRecipes.propTypes = {
  recipes: PropTypes.array,
}

export default FlatListRecipes
