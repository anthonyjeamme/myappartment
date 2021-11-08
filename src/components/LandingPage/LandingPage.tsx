import React from "react"
import CoOwnership from "./CoOwnership/CoOwnership"
import Description from "./Description/Description"
import Map from "./Map/Map"
import Presentation from "./Presentation/Presentation"
import Proximity from "./Proximity/Proximity"
import Rooms from "./Rooms/Rooms"
import TechnicalDetails from "./TechnicalDetails/TechnicalDetails"

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Presentation />
      <Description />
      <Rooms />
      <Proximity />
      <TechnicalDetails />
      <CoOwnership />
      <Map />
    </div>
  )
}
export default LandingPage
