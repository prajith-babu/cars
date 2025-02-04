import { createStore } from 'redux';
import selectedDataReducer from './reducer';

const store = createStore(selectedDataReducer);

export default store;