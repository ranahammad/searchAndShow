import { updateMapCenter, MapCenter } from "../../redux/searchAndShow";

export interface StateProps {
    mapCenter: MapCenter;
}

export interface DispatchProps {
    updateMapCenter: typeof updateMapCenter;
}

export interface OwnProps{
}

export type GoogleMapComponentProps = StateProps & DispatchProps & OwnProps;
