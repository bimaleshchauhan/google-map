import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import KmlFile from '../23042022-bxv5mwb.kml'
const MapComp = (props) => {
   
    console.log("props", window.google)
    const onReadyData = (mapProps, map) => {
        //var map;
         var src = 'https://developers.google.com/maps/documentation/javascript/examples/kml/westcampus.kml';

       
         console.log("mapProps", mapProps.google);
        console.log("map", map)

        map.data.loadGeoJson(
            "https://storage.googleapis.com/mapsdevsite/json/google.json"
          );
        // var kmlLayer = new google.maps.KmlLayer(src, {
        //     suppressInfoWindows: true,
        //     preserveViewport: false,
        //     map: map
        //   });
        //   kmlLayer.addListener('click', function(event) {
        //     var content = event.featureData.infoWindowHtml;
        //     var testimonial = document.getElementById('capture');
        //     testimonial.innerHTML = content;
        //   });
    }
    return(
        <div>
            <h2>Google Map</h2>
            <Map google={window.google} zoom={4} 
          initialCenter={{
            lat: -28, lng: 137
          }}
          onReady={(mapProps, map) => onReadyData(mapProps,map)}>
                </Map>
        </div>
    )
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyCMXaAK6LcqwNeud2NMB2_25iG3_D66XNQ'
  })(MapComp)