import { updateData, updateLoadingData } from './dinoSlice';

const callApiMiddlewares = (store) => (next) => (action) => {
  if (action.type === 'GET_DINO_FROM_API') {
    // console.log('Declancher le call API');
    // console.log('searchValue dans le middleware', stateDino.dino.searchValue);
    const stateDino = store.getState();
    store.dispatch(updateLoadingData(true));
    fetch(
      `https://dinotoapi.com/api/dinosaures?pagination[pageSize]=110&sort[0]=name&populate=*&filters[name][$contains]=${stateDino.dino.searchValue.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((data) => {
        const dataAction = updateData(data.data);
        store.dispatch(dataAction);
        store.dispatch(updateLoadingData(false));
      });
  }

  return next(action);
};

export default callApiMiddlewares;
