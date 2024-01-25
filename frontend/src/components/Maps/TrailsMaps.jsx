import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
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



    if (!trails) {
        return null
    }

    const pin = { url: mapPin}

    const mapContainer = {
        width: '100%',
        height: '100%',
        position: 'absolute'
    }

    // const lat = trails[0]?.lat
    // const lon = trails[0]?.lon
    const center = ({lat: 40.75317602762866, lng: -73.64472673923275})




    return (
        <>
            <GoogleMap zoom={10.5} center={center} mapContainerStyle={mapContainer}>
                {trails?.map((trail) => 
                <MarkerF position={{ lat: trail?.lat, lng: trail?.lon }} key={trail.id} icon={pin}/>)}
            </GoogleMap>   
        </>
    )
}



export default TrailsMapWrapper