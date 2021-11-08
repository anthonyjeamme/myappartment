import React from "react"
import Container from "../../Common/Container/Container"

import { Ruler } from "phosphor-react"

import "./Description.scss"

const Description = () => {
  return (
    <div className="Description">
      <Container>
        <div className="key-numbers">
          <div>
            <div className="icon">
              <Ruler />
            </div>
            <div className="title">26m²</div>
          </div>
          <div>
            <div className="icon">
              <Ruler />
            </div>
            <div className="title">Mezzanine de 11m²</div>
          </div>
          <div>
            <div className="icon">
              <Ruler />
            </div>
            <div className="title">
              2<sup>ème</sup> étage
            </div>
          </div>
        </div>

        <div className="text">
          <p>
            Superbe studio traverant situé sur les quais de Saône, très lumineux
            dont l'espace a été optimisé sans compromis. Le studio dispose d'une
            vue directe de la Saône et l'entrée donne sur une cour intérieur.
          </p>

          <p>
            Idéal pour les étudiants, en effet l'appartement se situe juste en
            face des subsistances et à quelques pas du convervatoire national
            supérieur musique et danse de Lyon.
          </p>

          <p>
            L'appartement dispose de deux lits de 140x190, un en mezzanine,
            l'autre dans le salon, rétractable.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Description
