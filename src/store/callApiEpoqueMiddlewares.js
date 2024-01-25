import { updateDataEpoque } from './dinoSlice';

const callApiMiddlewares = (store) => (next) => (action) => {
  if (action.type === 'GET_DINO_FROM_API') {
    // console.log('Declancher le call API');
    const stateDino = store.getState();
    const idEpoque = stateDino.dino.epoqueValue;

    fetch(`https://dinotoapi.com/api/epoques/${idEpoque}?populate=*`)
      .then((response) => response.json())
      .then((data) => {
        const dataAction = updateDataEpoque(
          data.data.attributes.dinosaures.data
        );

        store.dispatch(dataAction);
      });
  }

  // Call the next middleware or the reducer in the chain
  return next(action);
};

export default callApiMiddlewares;
