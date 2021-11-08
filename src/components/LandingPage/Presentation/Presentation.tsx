import React from "react"
import Container from "../../Common/Container/Container"

import "./Presentation.scss"

const Presentation = () => {
  const coverImageUrl =
    "https://images.unsplash.com/photo-1466098672325-c9ddda4b7975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"

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
