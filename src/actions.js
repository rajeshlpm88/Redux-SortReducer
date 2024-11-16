// actions.js
import { SET_SORT } from './actionTypes';

export const setSort = (sortOption) => ({
    type: SET_SORT,
    payload: sortOption,
});
