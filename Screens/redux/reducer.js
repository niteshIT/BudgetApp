import {ADD_TO_LIST, DELETE_DATA_BY_ID} from './constants';
const initialState = [];
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIST:
      return [...state, action.data];
    case DELETE_DATA_BY_ID:
      return state.filter(item => item.id !== action.data);
    default:
      return state;
  }
};
