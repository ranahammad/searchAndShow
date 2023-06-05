import { configureStore, Middleware, EnhancedStore } from '@reduxjs/toolkit';
import { Reducer } from 'redux';

let reduxStore: EnhancedStore;

export const setupStore = (reducer: Reducer, middleware: ReadonlyArray<Middleware>) => {
    reduxStore = configureStore({
        reducer,
        middleware,
    });
};

export const getStore = () => reduxStore;

export const getState = () => getStore().getState();