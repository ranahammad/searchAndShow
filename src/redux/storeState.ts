import { RouterState } from "connected-react-router";
import { SearchAndShowState } from "./searchAndShow/types";

export interface StoreState {
    searchAndShow: SearchAndShowState,
    router?: RouterState
};
