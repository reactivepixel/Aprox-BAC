import {Map} from 'immutable';

function setState(state, newState){
  return state.merge(newState);
}

function findItemIndex(state, itemID){
  return state.get('items').findIndex(
    (item) => item.get('id') === itemID
  );
}

function changeFilter(state, filter) {
  return state.set('filter', filter);
}

function toggleActive(state, itemID){
  //find the index of the itemID

  const itemIndex = findItemIndex(state, itemID);
  const updatedItem = state.get('items')
    .get(itemIndex)
    .update('isActive', isActive => isActive === true ? false : true )

  return state.update('items', items => items.set(itemIndex, updatedItem));
}

function editItem(state, itemID) {
  const itemIndex = findItemIndex(state, itemID);
  const updatedItem = state.get('items')
    .get(itemIndex)
    .set('editing', true);

  return state.update('items', items => items.set(itemIndex, updatedItem));
}

function cancelEditing(state, itemID) {
  const itemIndex = findItemIndex(state, itemID);
  const updatedItem = state.get('items')
    .get(itemIndex)
    .set('editing', false);

  return state.update('items', items => items.set(itemIndex, updatedItem));
}

function doneEditing(state, itemID, newName) {
  const itemIndex = findItemIndex(state, itemID);
  const updatedItem = state.get('items')
    .get(itemIndex)
    .set('editing', false)
    .set('name', newName);

  return state.update('items', items => items.set(itemIndex, updatedItem));
}

function addItem(state, name) {
  const itemID = state.get('items').reduce((maxId, item) => Math.max(item.get('id')), 0) + 1;
  const newItem = Map({id: itemID, name: name, rarity: 'Common', isActive: false, editing: false});
  return state.update('items', items => items.push(newItem));
}

function deleteItem(state, itemID) {
  return state.update('items',
    (items) => items.filterNot(
      (item) => item.get('id') === itemID
    )
  );
}

export default function(state = Map(), action){
  switch (action.type) {
    case 'ADD_ITEM':
      return addItem(state, action.name);
    case 'DELETE_ITEM':
      return deleteItem(state, action.itemID);
    case 'EDIT_ITEM':
      return editItem(state, action.itemID);
    case 'CANCEL_EDITING':
      return cancelEditing(state, action.itemID);
    case 'DONE_EDITING':
      return doneEditing(state, action.itemID, action.newName);
    case 'SET_STATE':
      return setState(state, action.state);
    case 'CHANGE_FILTER':
      return changeFilter(state, action.filter);
    case 'TOGGLE_ACTIVE':
      return toggleActive(state, action.itemID);
  }
  return state;
}
