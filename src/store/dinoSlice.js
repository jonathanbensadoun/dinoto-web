import { createSlice } from '@reduxjs/toolkit';
import dataOneDino from '../data/dataOneDino';

const initialState = {
  loadingData: true,
  loading: true,
  dinoData: [],
  epoqueData: [],
  oneDinoData: dataOneDino,

  typingValue: '',
  searchValue: '',
  epoqueValue: 1,
  dinoSelect: 1,
};

const dinoSlice = createSlice({
  name: 'dino',
  initialState,
  reducers: {
    saveLocalStorage: (state) => {
      try {
        const serialisedState = JSON.stringify(state);
        localStorage.setItem('persistantState', serialisedState);
      } catch (e) {
        console.warn(e);
      }
    },
    changeEpoque: (state, action) => {
      return {
        ...state,
        loading: false,
        epoqueValue: action.payload,
      };
    },
    changeDinoSelect: (state, action) => {
      return {
        ...state,
        loading: false,
        dinoSelect: action.payload,
      };
    },
    updateOneDinoData: (state, action) => {
      return {
        ...state,
        loading: false,
        oneDinoData: action.payload,
      };
    },
    updateDataEpoque: (state, action) => {
      return {
        ...state,
        loading: false,
        epoqueData: action.payload,
      };
    },
    updateData: (state, action) => {
      return {
        ...state,

        dinoData: action.payload,
        loading: false,
      };
    },
    typing: (state, action) => {
      const saisieEnCours = action.payload;
      return {
        ...state,
        typingValue: saisieEnCours,
      };
    },
    submitSearch: (state) => {
      return {
        ...state,
        searchValue: state.typingValue,
      };
    },
  },
});

export const {
  updateData,
  typing,
  submitSearch,
  updateDataEpoque,
  changeEpoque,
  updateOneDinoData,
  changeDinoSelect,
  saveLocalStorage,
} = dinoSlice.actions;

export default dinoSlice.reducer;
