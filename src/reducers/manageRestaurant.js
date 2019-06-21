import { combineReducers } from 'redux'
import cuid from 'cuid';

import restaurants from './restaurantsReducer'
import reviews from './reviewsReducer'

export const cuidFn = cuid;

export default combineReducers({
  restaurants,
  reviews
})
