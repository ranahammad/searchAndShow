import { MapDispatchToProps, MapStateToProps, connect } from 'react-redux';
import { GoogleMapComponent as Component } from './googleMap';
import { GoogleApiWrapper } from 'google-maps-react';
import { updateMapCenter, searchAndShowSelectors } from '../../redux/searchAndShow';
import { SearchAndShowState } from '../../redux/searchAndShow/types';
import { DispatchProps, OwnProps, StateProps } from './types';
import { GOOGLE_API_KEY } from '../constants';

const mapStateToProps: MapStateToProps<StateProps, OwnProps, SearchAndShowState> = (state) =>({
    mapCenter: searchAndShowSelectors.getMapCenter(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = (dispatch) => ({
    updateCenter: updateMapCenter
});

export const GoogleMap = connect(mapStateToProps, mapDispatchToProps)(
    GoogleApiWrapper({
        apiKey: (GOOGLE_API_KEY)
    })(Component)
);
