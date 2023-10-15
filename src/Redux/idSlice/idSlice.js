import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  characterID: null,
  comicsID:  null,
  creatorsID:  null,
  eventID: null
}

export const idSlice = createSlice({
    name:  'idSlice',
    initialState,
    reducers:{
        characterID: (state, actions) => {
          // Redux Toolkit allows us to write "mutating" logic in reducers. It
          // doesn't actually mutate the state because it uses the Immer library,
          // which detects changes to a "draft state" and produces a brand new
          // immutable state based off those changes
          state.characterID = actions.payload
        },
        comicsID: (state, actions) => {
          state.comicsID = actions.payload
        },
        creatorsID: (state, actions) => {
          state.creatorsID = actions.payload
        },
        eventID: (state, actions) =>{
          state.creatorsID = actions.payload
        }
      },
})

export const {eventID, characterID, comicsID, creatorsID} = idSlice.actions

export default idSlice.reducer