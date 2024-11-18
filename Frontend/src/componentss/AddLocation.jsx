import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const AddLocation = () => {
  // Coordinates for Delicious Hotel, Kathmandu
  const deliciousHotelLocation = {
    lat: 27.7073,  // Latitude of Delicious Hotel, Kathmandu
    lng: 85.3239   // Longitude of Delicious Hotel, Kathmandu
  };

  return (
    <div style={{ height: '100vh' }}>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={deliciousHotelLocation}
          zoom={15} // Adjust zoom level as needed
        >
          <Marker position={deliciousHotelLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default AddLocation;
