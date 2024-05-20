import {ADD_TO_LIST, DELETE_DATA_BY_ID} from './constants';

export function addToList(item) {
  return {
    type: ADD_TO_LIST,
    data: item,
  };
}

export function deleteDataById(id) {
  return {
    type: DELETE_DATA_BY_ID,
    data: id,
  };
}
