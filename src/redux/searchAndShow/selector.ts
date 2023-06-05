import { SearchAndShowState } from "./types";

const getMapCenter = (state: SearchAndShowState) => state.mapCenter;

export const searchAndShowSelectors = {
    getMapCenter,
};
