// src/js/store/index.js

import { configureStore, Action } from '@reduxjs/toolkit'
import rootReducer, { RootState } from "../reducers/index";


const store = configureStore({
  reducer: rootReducer
})

export default store;