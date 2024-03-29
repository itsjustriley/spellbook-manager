import { createSlice } from '@reduxjs/toolkit';

// with redux, we use slices to manage state
// a slice is a collection of reducers and actions for a specific feature
// a reducer is a function that takes the current state and an action and returns a new state
// an action is an object that describes what happened
// the action must have a type property that is a string, which explains how the state should change
// the action can also have a payload property that is a value that should be used to change the state
// in this case the states are arrays of spells, and the actions are to toggle whether a spell is known or prepared
// the payload is the spell id

const spellSlice = createSlice({
  name: 'spell',
  initialState: { known: [], prepared: [] },
  reducers: {
    toggleKnown: (state, action) => {
      const { spellID, level } = action.payload;
      if (state.known.includes(spellID)) {
        state.known = state.known.filter(spellNames => spellNames !== spellID);
        if (state.prepared.includes(spellID)) {
          state.prepared = state.prepared.filter(spellNames => spellNames !== spellID);
        }
      } else {
        state.known.push(spellID);
        if (level === 0) {
          state.prepared.push(spellID);
        }
      }
    },
    togglePrepared: (state, action) => {
      if (state.prepared.includes(action.payload)) {
        state.prepared = state.prepared.filter(spellId => spellId !== action.payload);
      } else {
        state.prepared.push(action.payload);
      }
    }
  }
});

export const { toggleKnown, togglePrepared } = spellSlice.actions;

export default spellSlice.reducer;