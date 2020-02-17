import React from "react";
import { GoogleMap , withScriptjs,withGoogleMap, Marker } from "react-google-maps" ;
import * as ExampleData from "./data/mock.json";

function Map() {
return (
<GoogleMap
 defaultZoom = {10}
 defaultCenter= {{lat :17.385044, lng : 78.486671 }}
 >
   {ExampleData.clients.map((client) => (
     <Marker key={client.location.ip} position = {{lat : client.location.latitude, 
      lng : client.location.longitude }}
      />

    ))}
 </GoogleMap>
   
   );
 }

 const MyMapComponent = withScriptjs(withGoogleMap(Map));

export default function App( ) {

  return( 
  <div style= {{width : '100vw' , height: '100vh'}}>
   <MyMapComponent
  isMarkerShown
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyDMyQXqBsikFoovFFfHM6pAUCaXQZdCPtg&libraries=geometry,drawing,places"
  loadingElement={<div style={{ height: `100%` }} />}
  containerElement={<div style={{ height: `400px` }} />}
  mapElement={<div style={{ height: `100%` }} />}
/>
  </div>
  );
}