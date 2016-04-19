export function toggleActive(itemID) {
  return {
    type: 'TOGGLE_ACTIVE',
    itemID
  }
}

export function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    filter
  }
}

export function editItem(itemID){
  return {
    type: 'EDIT_ITEM',
    itemID
  }
}

export function cancelEditing(itemID){
  return {
    type: 'CANCEL_EDITING',
    itemID
  }
}

export function doneEditing(itemID){
  return {
    type: 'DONE_EDITING',
    itemID,
    newName
  }
}

export function addItem(name) {
  return {
    type: 'ADD_ITEM',
    itemID,
    name
  }
}

export function deleteItem(itemID) {
  return {
    type: 'DELETE_ITEM',
    itemID
  }
}
