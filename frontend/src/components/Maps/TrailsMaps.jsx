import { useState } from "react";
import { GoogleMap, MarkerF, useLoadScript, InfoWindow } from "@react-google-maps/api";
import mapPin from "../../../images/red-pin48.png"


function TrailsMapWrapper({ trails }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
    
    })

    if (!isLoaded) {
        return <p>Loading</p>
    }

    if (!trails) {
        return null;
    }

    return (
        <>
            <div className="map-trail-wrapper">
                <TrailsMap trails={trails} />
            </div>
        </>
    )
}

export const TrailsMap = ({trails}) => {
    const [selectedTrail, setSelectedTrail] = useState(null);

    if (!trails) {
        return null
    }

    const pin = { url: mapPin }

    
    const mapContainer = {
        width: '100vw',
        height: '100vh',
        position: 'absolute'
    }
    
    const center = ({lat: 40.78585773023068, lng: -73.46763094030253})



    return (
        <>
            <GoogleMap zoom={10.5} center={center} mapContainerStyle={mapContainer}>
            {trails?.map((trail) =>
                <MarkerF
                    position={{ lat: trail?.lat, lng: trail?.lon }}
                    key={trail.id}
                    icon={pin}
                    onClick={() => setSelectedTrail(trail)} 
                />
            )}

            {selectedTrail && (
                <InfoWindow
                    position={{ lat: selectedTrail.lat, lng: selectedTrail.lon }}
                    onCloseClick={() => setSelectedTrail(null)} 
                >
                    <div id="info-wrapper">
                        <h2>{selectedTrail.name}</h2>
                        <p>{selectedTrail.difficulty}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
        </>
    )
}



export default TrailsMapWrapper