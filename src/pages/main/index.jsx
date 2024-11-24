import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ComposableMap, Geographies, Geography,  ZoomableGroup } from "react-simple-maps";




const Main = () => {
  const [geo, setGeo] =useState();
  const geoUrl ="https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"

  return (
    <div className='h-[calc(100vh-50px)] text-white overflow-hidden flex flex-col justify-center items-center md:pt-20 wrapper'>
    <h1 className=' pt-3'>Detay Görüntüle: {" "}  {geo?.properties?.name ? geo.properties.name : '(ülke seçin)'}</h1>
   
    <ComposableMap className="w-full h-full ">
      <ZoomableGroup  center={[0, 0]} minZoom={1} maxZoom={4}>
    <Geographies geography={geoUrl}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Link key={geo.rsmKey} to={`/detail?code=${geo.id}`}> 
          <Geography 
          onMouseEnter={() => setGeo(geo)}
          onMouseLeave={() => setGeo('null')}
           geography={geo} 
          stroke="gray"
          style={{
            default: {
              fill: "#eee", // Varsayılan renk (gri)
              outline: "none",
            },
            hover: {
              fill: "#ed5509", 
              outline: "none",
            },
            
          }}
        />
      </Link>
      
      ))
    }
    </Geographies>
    </ZoomableGroup>
  </ComposableMap>
  </div>
  );
};

export default Main;