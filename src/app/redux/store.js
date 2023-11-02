// store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import dummyReducer from './slice/dummy.slice';

const store = configureStore({
  reducer: {
    dummy: dummyReducer,
    
  },
});

export default store;
