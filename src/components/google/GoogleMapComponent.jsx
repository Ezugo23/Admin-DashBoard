// GoogleMap.js
import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Autocomplete } from 'react-google-autocomplete';

const GoogleMapComponent = () => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  const mapStyles = {
    height: '600px',
    width: '80%',
  };

  const defaultCenter = { lat: 0, lng: 0 };

  useEffect(() => {
    // Try HTML5 geolocation
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.error('Error: The Geolocation service failed.');
          setCenter(defaultCenter);
        }
      );
    } else {
      console.error("Error: Your browser doesn't support geolocation.");
      setCenter(defaultCenter);
    }
  }, []);

  const onLoad = (map) => {
    setMap(map);
  };
  const onPlaceSelected = (place) => {
    // Update the map center when a place is selected from the autocomplete dropdown
    setCenter({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  };

  const googleMapsApiKey = 'AIzaSyCNESfWrhzXDsQYETsnsSKaNIEEFELV-E4';

  return (
    <LoadScript googleMapsApiKey="AIzaSyCNESfWrhzXDsQYETsnsSKaNIEEFELV-E4">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={center}
        onLoad={onLoad}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
