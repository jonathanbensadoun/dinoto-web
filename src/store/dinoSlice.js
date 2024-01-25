import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: true,
  dinoData: [],
  epoqueData: [],
  oneDinoData: [],
  typingValue: '',
  searchValue: '',
  epoqueValue: 1,
  dinoSelect: 1,
};

const dinoSlice = createSlice({
  name: 'dino',
  initialState,
  reducers: {
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
        loading: false,
        dinoData: action.payload,
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
} = dinoSlice.actions;

export default dinoSlice.reducer;
