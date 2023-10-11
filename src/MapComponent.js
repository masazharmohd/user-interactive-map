import * as React from "react";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import DataLine from "./dataLine";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/";

function MapComponent({ dimensions, onMarkerClick, selected }) {
  const style = {
    height: "80%",
    width: "100%"
  };
  const dataOfCountry = [
    {
      "id": 1,
      "region": "US",
      "data": 290,
      "position": [37.090240, -95.712891]
    },
    // Add more countries here
    {
      "id": 7,
      "region": "CA",
      "data": 380,
      "position": [49.2827, -123.1207] // Canada
    },
    {
      "id": 8,
      "region": "MX",
      "data": 430,
      "position": [23.6345, -102.5528] // Mexico
    },
    {
      "id": 9,
      "region": "GT",
      "data": 220,
      "position": [15.7835, -90.2308] // Guatemala
    },
    {
      "id": 10,
      "region": "HN",
      "data": 150,
      "position": [15.1991, -86.2419] // Honduras
    },
    {
      "id": 11,
      "region": "NI",
      "data": 120,
      "position": [12.8654, -85.2072] // Nicaragua
    },
    {
      "id": 12,
      "region": "CR",
      "data": 320,
      "position": [9.7489, -83.7534] // Costa Rica
    },
    {
      "id": 13,
      "region": "PA",
      "data": 290,
      "position": [8.5380, -80.7821] // Panama
    },
    {
      "id": 14,
      "region": "CO",
      "data": 680,
      "position": [4.5709, -74.2973] // Colombia
    },
    {
      "id": 15,
      "region": "VE",
      "data": 550,
      "position": [10.4806, -66.9036] // Venezuela
    },
    {
      "id": 16,
      "region": "BR",
      "data": 810,
      "position": [-14.2350, -51.9253] // Brazil
    },
    {
      "id": 17,
      "region": "PE",
      "data": 430,
      "position": [-9.1900, -75.0152] // Peru
    },
    {
      "id": 18,
      "region": "EC",
      "data": 360,
      "position": [-1.8312, -78.1834] // Ecuador
    },
    {
      "id": 19,
      "region": "CL",
      "data": 460,
      "position": [-33.4489, -70.6693] // Chile
    },
    {
      "id": 20,
      "region": "AR",
      "data": 710,
      "position": [-34.6118, -58.4173] // Argentina
    }
  ];

  const darkBlueColor = {color: '#0000ff'}
  const lightBlueColor = {color: '#4d4dff'}
  const moreLightBlueColor = {color: '#8080ff'}
  const extraLightBlueColor = {color: '#b3b3ff'}



  return (
    <div style={style}>
      <MapContainer center={[37.090240, -95.712891]} zoom={3}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {dataOfCountry.map((ele) => {
          return (
            <CircleMarker 
              key={ele.id}
              center={ele.position}
              pathOptions={
              ele.data < 1000 && ele.data > 750 ? 
              darkBlueColor :
              ele.data < 750 && ele.data > 500 ?
              lightBlueColor :
              ele.data < 500 && ele.data > 250 ?
              moreLightBlueColor : extraLightBlueColor
              } radius={ele.data/50}>
              <Popup>Region: {ele.region} <br/> Data: {ele.data} </Popup>
            </CircleMarker>
          )
        })}
      </MapContainer>
      <DataLine />
    </div>
  );
}

export default MapComponent;
