import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch(err) {
        console.log(err);
    }
}

const initState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer, 
    initState,
    composeWithDevTools(applyMiddleware(...middleware))
)

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;