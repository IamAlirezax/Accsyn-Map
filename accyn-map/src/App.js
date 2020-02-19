import React, { useState } from "react";
import { GoogleMap , withScriptjs,withGoogleMap, Marker, InfoWindow } from "react-google-maps" ;
import * as ExampleData from "./data/mock.json";

function Map() {
  const [selectedClient, setSelectedClient] = useState(null)
return (
<GoogleMap
 defaultZoom = {10}
 defaultCenter= {{lat :17.385044, lng : 78.486671 }}
 >
   {ExampleData.clients.map((client) => (
     <Marker

      key={client.code} 
      position = {{lat : client.location.latitude, 
      lng : client.location.longitude }}

      onClick={() => {
      setSelectedClient(client);
      }}
      icon = {{
        url: '/Filmgate_mot_svart_4k_RGB.svg',
        scaledSize: new window.google.maps.Size(80,80)
      }}
      />

    ))}
{selectedClient && (
  <InfoWindow
  position = {{lat : selectedClient.location.latitude, 
    lng : selectedClient.location.longitude }}
    onCloseClick = {() => {setSelectedClient(null)

    }}
     >
    <div> Ｃｌｉｅｎｔ Ｄｅｔａｉｌｓ
      <h2>{selectedClient.location.isp}</h2>
      <p>{selectedClient.location.city}</p>
      <p1>{selectedClient.status}</p1>
    </div>
  </InfoWindow>
)}
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