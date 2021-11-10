import React from "react"
import Container from "../../Common/Container/Container"

import "./CoOwnership.scss"

const CoOwnership = () => {
  return (
    <div className="CoOwnership">
      <Container>
        <h2>L'immeuble</h2>
        <div
          style={{
            marginTop: 20,
            display: "grid",
            gap: 40,
            gridTemplateColumns: "300px auto",
          }}
        >
          <div>
            <img src="/images/photos/immeuble.png" style={{ width: 300 }} />
          </div>

          <div>
            L'immeuble possède 3 étages sans assenceur.
            <div>Nombre de lots</div>
            <div>Immeuble construit en ... classé</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CoOwnership
