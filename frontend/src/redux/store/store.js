import {configureStore} from "@reduxjs/toolkit"


const store = configureStore({
  reducer: {
  },
})

export default store;

// store.js:4  Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers