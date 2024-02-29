import { configureStore } from '@reduxjs/toolkit';
import spellReducer from './spellSlice';

// saveToLocalStorage and loadFromLocalStorage are helper functions to keep state in local storage
// this way, if the user refreshes the page, the state is not lost
// with SerializedState the state is converted to a string so it can be stored in local storage


const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
    console.warn(e);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch(e) {
    console.warn(e);
    return undefined;
  }
};

const preloadedState = loadFromLocalStorage();

// configureStore lets us pass in the reducer and preloadedState
// the reducer is the spellReducer from spellSlice.js
const store = configureStore({
  reducer: {
    spell: spellReducer
  },
  preloadedState
});

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;