import { createStore, combineReducers } from 'redux';
import dataReducer from './reducers/dataReducer';
import ordersListReducer from './reducers/ordersListReducer';
import cartReducer from './reducers/cartReducer';

const rootReducer = combineReducers({
  data: dataReducer,
  ordersList: ordersListReducer,
  cart:cartReducer
});

const store = createStore(rootReducer);

export default store;
