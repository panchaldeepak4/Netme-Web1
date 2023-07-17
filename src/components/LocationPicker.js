import React,{ useState } from 'react'
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px'
  };
  
  const center = {
    lat: -34.397,
    lng: 150.644
  };

const LocationPicker = () => {

  const [selectedPlace, setSelectedPlace] = useState(null);

  const onSelect = (place) => {
    setSelectedPlace(place);
  };
      
  return (
    <div>
    <LoadScript googleMapsApiKey="AIzaSyCT1gQ5vVpe6pvowjBbu7pX4iy-L">      {/*  need to provide API key here  */}
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center} onClick={() => onSelect(center)} />
        {selectedPlace && (
          <InfoWindow position={selectedPlace} onCloseClick={() => setSelectedPlace(null)}>
            <div>
              <h3>Selected Location</h3>
              <p>Latitude: {selectedPlace.lat}</p>
              <p>Longitude: {selectedPlace.lng}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>

    </div>
  )
}

export default LocationPicker