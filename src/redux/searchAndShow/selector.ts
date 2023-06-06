import { initialState } from "./state";
import { SearchAndShowState } from "./types";

const getMapCenter = (state: SearchAndShowState) => state.mapCenter ?? initialState.mapCenter;

export const searchAndShowSelectors = {
    getMapCenter,
};
