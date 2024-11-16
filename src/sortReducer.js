// sortReducer.js
import { SET_SORT } from './actionTypes';

const initialState = 'name'; // Default sort option

const sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT:
            return action.payload;
        default:
            return state;
    }
};

export default sortReducer;
