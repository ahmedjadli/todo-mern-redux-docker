import { SET_VISIBILITY_FILTER } from "../constants/TodoActionTypes";
import { SHOW_ALL } from "../constants/TodoFilters";

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
