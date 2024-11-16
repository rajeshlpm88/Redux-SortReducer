// src/store.js
import { createStore } from 'redux';
import sortReducer from './sortReducer';

const store = createStore(sortReducer);

export default store;
