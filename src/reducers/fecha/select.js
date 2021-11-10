import { combineReducers } from 'redux'
import { CHANGE_FECHA } from '../../actions/fecha/select'

const change = (stateDefault = 21, action) => {
  switch (action.type) {
    case CHANGE_FECHA:
      return action.payload
    default:
      return stateDefault
  }
}

export default combineReducers({ change })
