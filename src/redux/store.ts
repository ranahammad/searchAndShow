import { combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { getStore, setupStore } from './reduxStore';

const epicMiddleware = createEpicMiddleware();

const middleware = [
    routerMiddleware(history),
    epicMiddleware,
    ...getDefaultMiddleware({
        serializableCheck: false,
        thunk: false,
    })
];

const rootReducer = combineReducers({
    router: connectRouter(history),
});

const rootEpic = combineEpics();

export const configureAppStore = () => {
    setupStore(rootReducer, middleware);
    const store = getStore();
    epicMiddleware.run(rootEpic as any);
    
    return store;
};
