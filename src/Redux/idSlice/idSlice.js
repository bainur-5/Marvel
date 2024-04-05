import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characterID: null,
  comicsID: null,
  creatorsID: null,
  eventID: null,
};

export const idSlice = createSlice({
  name: "idSlice",
  initialState,
  reducers: {
    characterID: (state, actions) => {
      state.characterID = actions.payload;
    },
    comicsID: (state, actions) => {
      state.comicsID = actions.payload;
    },
    creatorsID: (state, actions) => {
      state.creatorsID = actions.payload;
    },
    eventID: (state, actions) => {
      state.eventID = actions.payload;
    },
  },
});

export const { eventID, characterID, comicsID, creatorsID } = idSlice.actions;

export default idSlice.reducer;
