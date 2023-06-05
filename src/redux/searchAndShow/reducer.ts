import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from './state';
import { MapCenter } from './types';

const searchAndShowSlice = createSlice({
    name: 'searchAndShow',
    initialState,
    reducers: {
        updateMapCenter(state, action: PayloadAction<MapCenter>) {
            state.mapCenter = action.payload;
        }
    },
});

const { actions, reducer } = searchAndShowSlice;

export const { updateMapCenter } = actions;
export const searchAndShowReducer = reducer;