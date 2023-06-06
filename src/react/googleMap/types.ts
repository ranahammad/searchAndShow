import { IProvidedProps } from "google-maps-react";
import { updateMapCenter, MapCenter } from "../../redux/searchAndShow";

export interface StateProps {
    mapCenter: MapCenter;
}

export interface DispatchProps {
    updateCenter: typeof updateMapCenter;
}

export interface OwnProps{
}

export type GoogleMapComponentProps = IProvidedProps & StateProps & DispatchProps & OwnProps;
