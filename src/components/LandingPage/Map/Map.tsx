import React, { useMemo, useRef, useState } from "react"

import { MapPin } from "phosphor-react"
import { Icon, LatLngExpression } from "leaflet"
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"

import "./Map.scss"

const Map = () => {
  const coordinates: LatLngExpression = [45.7666308, 4.8140858]
  const houseIcon = new Icon({
    iconSize: [50, 50],
    iconUrl: "/images/map/house.svg",
    className: "map-icon",
  })

  const busIcon = new Icon({
    iconSize: [30, 30],
    iconUrl: "/images/map/bus.svg",
    className: "map-icon bus",
  })

  const musicIcon = new Icon({
    iconSize: [30, 30],
    iconUrl: "/images/map/music.svg",
    className: "map-icon",
  })

  const [position, setPosition] = useState<LatLngExpression>([
    45.7684818, 4.8128216,
  ])

  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        console.log("ICI", Object.values(markerRef.current.getLatLng()))
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    []
  )

  const proximity = {
    house: {
      position: [45.766714670389646, 4.816655701609505],
    },
    bus: [
      {
        position: [45.76699907067782, 4.820711788269128],
        name: "Arrêt greillon",
      },
      {
        position: [45.7673134061515, 4.814940704428517],
        name: "Arrêt homme de la roche",
      },
    ],
    music: [
      {
        position: [45.76808426898135, 4.816709323399394],
      },
    ],
  }

  return (
    <div className="Map">
      <MapPin />
      <MapContainer
        center={coordinates}
        zoom={17}
        scrollWheelZoom={false}
        style={{ height: 500 }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {/* <Marker
          position={position}
          icon={houseIcon}
          draggable={true}
          eventHandlers={eventHandlers}
          ref={markerRef}
        ></Marker> */}

        <Marker position={proximity.house.position} icon={houseIcon} />

        {proximity.music.map(bus => (
          <Marker position={bus.position} icon={musicIcon} />
        ))}
        {proximity.bus.map(bus => (
          <Marker position={bus.position} icon={busIcon}>
            <Tooltip className="map-tooltip">
              <div>
                <strong>{bus.name}</strong>
              </div>
              distance :{" "}
              {measure(
                bus.position[0],
                bus.position[1],
                proximity.house.position[0],
                proximity.house.position[1]
              )}{" "}
              mètres
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

const MapWrapper = () => {
  if (typeof window !== "undefined") return <Map />

  return null
}

export default MapWrapper

function measure(lat1, lon1, lat2, lon2) {
  // generally used geo measurement function
  var R = 6378.137 // Radius of earth in KM
  var dLat = (lat2 * Math.PI) / 180 - (lat1 * Math.PI) / 180
  var dLon = (lon2 * Math.PI) / 180 - (lon1 * Math.PI) / 180
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  var d = R * c
  return Math.round(d * 1000)
}
