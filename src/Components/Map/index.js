import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import css from './Map.module.css'
import { attribution, tileUrl, defaultMapState } from "../../utils/Utils";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import React from "react";

function Map({latProp, longProp}) {
  
  const center = {
    lat: latProp,
    lng: longProp
  };


  const [position, setPosition] = useState(center);
 

  const markerRef = useRef(center);

  return (
    <div className={css.map}>
      <MapContainer
        className={css.map}
        center={center}
        zoom={defaultMapState.zoom}
        style={{
          width: "40%",
          height: "40%",
          border: "solid   rgb(0, 95, 150)",
          borderRadius: "25px",
          position: "absolute",
          top: 300,
          bottom: 20,
          left: 850,
          zIndex: 0,
        }}
        updateWhenZooming={false}
        updateWhenIdle={true}
        preferCanvas={true}
        minZoom={defaultMapState.minZoom}
      >
        <TileLayer attribution={attribution} url={tileUrl} />
        <Marker
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [25, 41],
              iconAnchor: [13, 11],
            })
          }
  
          position={position}
          ref={markerRef}
        >
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
