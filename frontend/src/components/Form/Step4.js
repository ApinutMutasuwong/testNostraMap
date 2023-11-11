// import React from "react";

// export default function Step4({ formData, handleChange }) {
//   return (
//     <div className="Toilet-info-container">
//       <div className="map-box">map</div>
//       <div>
//         <label>Long</label>
//         <input
//           type="text"
//           name="longitude"
//           disabled
//           value={formData.longitude}
//         />
//       </div>
//       <div>
//         <label>Lang</label>
//         <input type="text" name="latitude" disabled value={formData.latitude} />
//       </div>
//     </div>
//   );
// }

/* global nostra */ // <-- Add this comment to inform ESLint that 'nostra' is defined externally

/* global nostra */

import React, { useEffect, useState } from "react";

export default function Step4({ formData, handleChange }) {
  const [latitude, setLatitude] = useState(formData.latitude || "");
  const [longitude, setLongitude] = useState(formData.longitude || "");
  let pointLayer;

  useEffect(() => {
    // Check if the script is already loaded
    if (!window.nostra) {
      const script = document.createElement("script");
      script.src =
        "//api.nostramap.com/nostraapi/v2.0?key=GDdAoW1Vs(48(1ni3MvBQyXGF(HgoA3Xy4LhYd1tJ1N)BwfaEO0k)lySSnEV9(gn2wfgYAToSXKYfCpy2DC9O60=====2";
      script.async = true;
      script.onload = initializeMap;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    } else {
      // Nostra API is already loaded, directly initialize the map
      console.log(formData);
      initializeMap();
    }
  }, []);

  const initializeMap = () => {
    let map;

    const mapContainer = document.getElementById("map");

    nostra.onready = function () {
      map = new nostra.maps.Map("map", {
        id: "mapTest",
        logo: true,
        scalebar: true,
        basemap: "streetmap",
        slider: true,
        level: 15,
        lat: 13.722944,
        lon: 100.530449,
        country: "TH",
      });

      pointLayer = new nostra.maps.layers.GraphicsLayer(map, {
        id: "pointLayer",
        mouseOver: false,
      });
      map.addLayer(pointLayer);

      map.events.click = function (e) {
        handleMapClick(e);
      };
    };
  };

  const handleMapClick = (e) => {
    const coordinates = e.mapPoint;
    const clickedLatitude = coordinates.y;
    const clickedLongitude = coordinates.x;

    pointLayer.clear();

    setLatitude(clickedLatitude.toFixed(8));
    setLongitude(clickedLongitude.toFixed(8));
    handleChange({
      target: { name: "latitude", value: clickedLatitude.toFixed(8) },
    });
    handleChange({
      target: { name: "longitude", value: clickedLongitude.toFixed(8) },
    });

    addMarker(clickedLatitude, clickedLongitude);
  };

  const addMarker = (latitude, longitude) => {
    try {
      const pointMarker = new nostra.maps.symbols.Marker({
        url: "",
        width: 60,
        height: 60,
        onClick: function () {
          console.log("Marker clicked!");
        },
      });

      pointLayer.addMarker(latitude, longitude, pointMarker);
    } catch (error) {
      console.error("Error adding marker:", error);
    }
  };

  return (
    <div className="Toilet-info-container">
      <div id="map" style={{ height: "600px", width: "600px" }}></div>
      <div></div>
      <div>
        <label>Latitude</label>
        <input
          type="text"
          name="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />
        <label>Longitude</label>
        <input
          type="text"
          name="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />
      </div>
    </div>
  );
}
