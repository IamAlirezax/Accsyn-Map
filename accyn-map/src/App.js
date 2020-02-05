import React from "react";
import { GoogleMap , withScriptjs,withGoogleMap } from "google-map-react" ;

function Map() {
return (
<GoogleMap
 default Zoom = {10}
 defaultCenter={{lat : 12, lng : 12  }}
    />
   );
 }

 const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function App( ) {

  return( 
  <div>
    <WrappedMap googleMapUrl={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places'} />
   loadingElement = {<div style={{height: "100%" }} />}
   containerElement={<div style={{ height: `400px` }} />}
   mapElement={<div style={{ height: `100%` }} />}
  </div>
  );
}