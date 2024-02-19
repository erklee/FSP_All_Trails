import { GoogleMap, MarkerF, useLoadScript} from "@react-google-maps/api";
import mapPin from "../../../images/red-pin48.png"
import { useNavigate } from "react-router-dom"
import './ReviewMap.css'


function ReviewMapWrapper({ trail }) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY
    
    })

    if (!isLoaded) {
        return <p>Loading</p>
    }

    if (!trail) {
        return null;
    }

    return (
        <>
            <div className="review-trail-wrapper">
                <ReviewMap trail={trail} />
            </div>
        </>
    )
}

export const ReviewMap = ({trail}) => {
    const navigate = useNavigate()

    if (!trail) {
        return null
    }

    const pin = { url: mapPin }
    
    const mapContainer = {
        width: '80%',
        height: '200px',
        border: '2px solid gray',
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }

    const mapOptions = {
        disableDefaultUI: true, 
        zoomControl: false, 
        streetViewControl: false, 
        gestureHandling: 'none' 
      };

    const center = ({lat: 40.78585773023068, lng: -73.46763094030253})



    return (
        <>
            <div id='googlemap-review'>
                <GoogleMap zoom={14}  center={{lat: trail?.lat, lng: trail?.lon}} mapContainerStyle={mapContainer} options={mapOptions} onClick={() => navigate("/trails")}>
            
                <MarkerF key={trail.id} position={{lat: trail?.lat, lng: trail?.lon}} icon={pin}/>

                </GoogleMap> 

            </div>
        </>

    )
}




export default ReviewMapWrapper