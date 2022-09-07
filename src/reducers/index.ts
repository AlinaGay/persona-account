import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from '../actions/action.types';


const rootReducer = combineReducers({
  auth: authReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;