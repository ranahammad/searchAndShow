import { connect } from 'react-redux';
import { GoogleMapComponent as Component } from './googleMap';
import { GoogleApiWrapper } from 'google-maps-react';
import { updateMapCenter, searchAndShowSelectors } from '../../redux/searchAndShow';

// const mapStateToProps: MapStateToProps<StateProps, OwnProps, SearchAndShowState>
const mapStateToProps = state => ({
    mapCenter: searchAndShowSelectors.getMapCenter(state),
});

// const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> 
const mapDispatchToProps = {
    updateMapCenter: updateMapCenter
};

export const GoogleMap = connect(mapStateToProps, mapDispatchToProps)(
    GoogleApiWrapper({
        apiKey: ('AIzaSyA1pdqqY2DOsRTAhk4uCXLzWwMeW_5rD78')
    })(Component)
);
