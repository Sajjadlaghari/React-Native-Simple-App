import {createStore,combineReducers,applyMiddleware} from 'redux';
import {UserListReducer} from '../redux/reducers/UserListReducer'
import thunk from 'redux-thunk';


export const configureStore=()=>{
    const store = createStore(combineReducers({
          UserList:UserListReducer
    }),
    applyMiddleware(thunk),
    );
     return store;
}

