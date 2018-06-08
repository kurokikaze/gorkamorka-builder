import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import teefReducer from '../reducers/teef'
import unitsReducer from '../reducers/units'
import vehiclesReducer from '../reducers/vehicles'

export default combineReducers({
  routing: routerReducer,
  teef: teefReducer,
  items: (a) => (a || []),
  vehicles: vehiclesReducer,
  units: unitsReducer,
});
