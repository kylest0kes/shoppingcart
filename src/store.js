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

function loadFromLocalStorage() {
    console.log("in this bitchhh")
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined
        } else {
            return JSON.parse(serializedState);
        }
    } catch(err) {
        console.log(err);
        return undefined;
    }
}

const middleware = [thunk];

const persistedState = loadFromLocalStorage()
;

const store = createStore(
    rootReducer, 
    persistedState,
    composeWithDevTools(applyMiddleware(...middleware)),
)

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;