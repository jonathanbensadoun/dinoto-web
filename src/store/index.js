import { configureStore } from '@reduxjs/toolkit';
import dinoSlice from './dinoSlice';
import callApiMiddlewares from './callApiMiddlewares';
import callApiEpoqueMiddlewares from './callApiEpoqueMiddlewares';
import callApiForOneMiddlewares from './callApiForOneMiddlewares';

const store = configureStore({
  reducer: {
    dino: dinoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      callApiMiddlewares,
      callApiEpoqueMiddlewares,
      callApiForOneMiddlewares
    ),
});

export default store;
