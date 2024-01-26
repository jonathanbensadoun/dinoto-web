import { updateOneDinoData, updateLoadingData } from './dinoSlice';

const callApiForOneMiddlewares = (store) => (next) => (action) => {
  if (action.type === 'GET_DINO_FROM_API') {
    // console.log('Declancher le call API');
    const stateDino = store.getState();
    // console.log('searchValue dans le middleware', stateDino.dino.dinoSelect);
    store.dispatch(updateLoadingData(true));
    fetch(
      `https://dinotoapi.com/api/dinosaures/${stateDino.dino.dinoSelect}?populate=*`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.data);
        const dataAction = updateOneDinoData(data.data);
        store.dispatch(dataAction);
        store.dispatch(updateLoadingData(false));
      });
  }

  // Call the next middleware or the reducer in the chain
  return next(action);
};

export default callApiForOneMiddlewares;
