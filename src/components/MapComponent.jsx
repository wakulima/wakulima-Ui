import {useMemo} from 'react'
import { GoogleMap,useLoadScript,Marker } from '@react-google-maps/api'

export default function MapComponent() {
  const {isLoaded}=useLoadScript({googleMapsApiKey:"AIzaSyDFqHmcjDJc4ar1x7R9kNKNKN-XPjAir6Q"})
  if(!isLoaded)return <div>Loading....</div>;

  return (
<Map/>
  )
  function Map(){
    return (
<GoogleMap
zoom={10}
center={{
  lat:0.0236,lng:37.9062
}}
mapContainerClassName={'containerMap'}
>
  <Marker position={{lat:1.2921,lng:1.2921}}/>
</GoogleMap>
    )
  }
}
