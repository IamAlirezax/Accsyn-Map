import { Map, GoogleApiWrapper } from 'google-maps-react';
import './App.css';

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(MapContainer);


render() {
    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
          
        />
    );
   
  }