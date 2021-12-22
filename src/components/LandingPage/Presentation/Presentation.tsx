import React from "react"
import Container from "../../Common/Container/Container"

import { getCloudinaryURL } from "../../../utils/cloudinary"

import "./Presentation.scss"

const Presentation = () => {
  const background_public_id = "appart/1640179338947_pvv9tt"
  const coverImageUrl = getCloudinaryURL(background_public_id, {})
  return (
    <div
      className="Presentation"
      style={{
        backgroundImage: `url(${coverImageUrl})`,
      }}
    >
      <div>
        <Container>
          <h1>Beau studio de 26m² à vendre</h1>
          <p>Proche de Lyon 1 et de toute commodité</p>
        </Container>
      </div>
    </div>
  )
}
export default Presentation
