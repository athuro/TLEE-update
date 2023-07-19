import React from "react";
import Cesium from "cesium";
// import { Cartesian3 } from "cesium";
// import { Viewer, Entity } from "cesium-react";

const OrbitPage = () => {

    const viewer = new Cesium.Viewer(document.getElementById("main"));

    viewer.entities.add({
      name: "tokyo",
      description: "test",
      position: Cartesian3.fromDegrees(139.767052, 35.681167, 100),
      point: { pixelSize: 10 }
    });

    return(
        <input className="searchTerm" type="text" placeholder="Search by object name or 5-digit NORAD ID, e.g. ISS (ZARYA) or 26609" /> 
    )
}

export default OrbitPage