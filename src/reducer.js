import {Map} from 'immutable';

function setState(state, newState){
  return state.merge(newState);
}

function findItemIndex(state, itemID){
  return state.get('items').findIndex(
    (item) => item.get('id') === itemID
  );
}

function addDrink(state, drink) {
  return state.update('drinksConsumed', drinks => drinks.push(drink));
}

export default function(state = Map(), action){
  switch (action.type) {
    case 'ADD_DRINK':
      return addDrink(state, action.drink);
    case 'SET_STATE':
      return setState(state, action.state);
  }
  return state;
}
