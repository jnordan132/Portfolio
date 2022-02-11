import GoogleMapReact from "google-map-react";
import { googleMapsArguments } from "../../mapStyles";
import "../../assets/ping.svg"

const Map = () => {
  const handleApiLoaded = (map, maps) => {
    const ping = "../../assets/ping.svg"
    const marker = new maps.Marker({
      position: ping,
      icon: googleMapsArguments.pin,
      map: map,
    });
    marker.setMap(map);
    map.setOptions({
      styles: googleMapsArguments.stylesDark,
      disableDefaultUI: true,
      gestureHandling: "none",
    });
  };

  //styling for map
  const styles = {
    mapStyles: { height: "35em" },
    preventRunoff: { overflow: "hidden" },
  };
  return (
    <div className="container-hero" style={styles.preventRunoff}>
      <div className="row position-relative">
        <div className="col" style={styles.mapStyles}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyBYHsFDTTDPAWdXNnAFgTIqq8ipt9c8r7I",
            }}
            defaultCenter={googleMapsArguments.center}
            defaultZoom={googleMapsArguments.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          ></GoogleMapReact>
        </div>

        <div className="card">
          <h2>Available Remote</h2>
          <ul className="list">
            <li className="">
              <span>Wilmington, NC USA</span>
            </li>
            <li className="">
              <span className="">jacob.nordan113322@gmail.com</span>
            </li>
            <li className="">
              <span>(910) 620-0143</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Map;
