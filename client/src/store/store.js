import { createStore } from 'redux';
import rootReducer from './../reducers/main.js';

const store = createStore(rootReducer);

export default store;