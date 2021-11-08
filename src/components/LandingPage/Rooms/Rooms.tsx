import React from "react"
import Container from "../../Common/Container/Container"

import "./Rooms.scss"

const Rooms = () => {
  return (
    <div className="Rooms">
      <Container>
        <h2>Composition du studio</h2>

        <p>
          L'appartement a été travaillé pour occuper le plus efficacement
          possible l'espace disponible, sans compromis.
        </p>

        <div>
          <h3>Le salon</h3>
          <p>
            Très lumineux grace à deux grandes fenêtes donnant sur la Saone, le
            salon fait 18m² et 3,4 metres sous plafond, offrant un espace de vie
            spacieux.
          </p>
        </div>

        <div>
          <h3>La cuisine</h3>
          <p>
            La cuisine équipé, comporte un frigo de grande taille changé en
            2021, une plaque a induction 4 feux changé en 2018, une hotte, une
            machine à laver, un lavabo grande taille ainsi qu'un généreux espace
            de rangement avec 6 meubles.
          </p>
        </div>

        <div>
          <h3>La salle de bain</h3>
          <p>
            Sur une surface de 6m², la salle de bain se compose d'une belle
            douche italienne, d'un sèche serviette, d'un WC et d'un lavabo posé
            sur un meuble de rangement. Comporte divers petits espaces de
            rangement. La salle de bain possède une vmc et un hublot de 20x40 cm
            donnant sur les parties communes, fermé par une vitre
            fumée.Permettant un bon controle de l'humidité.
          </p>
        </div>

        <div>
          <h3>La mezzanine</h3>
          <p>
            Une mezzanine avec hauteur sous plafond de 1m20 prévu pour un lit de
            140 par 190, est accessible via une échelle rétractable. Il est
            également possible d'y installer une télé, offrant un espace
            confortable, duquel nous avons une vue plongeante sur la Saone. Un
            grand rangement est également disponible.
          </p>
        </div>

        <div>
          <h3>La petite terrasse</h3>
          <p>
            Dans les parties communes (à ciel ouvert) et juste devant la porte
            d'entrée de l'appartement, il est possible d'y installer une petite
            chaise. Idéal pour les petits déjeunés en été !
          </p>
        </div>
      </Container>
    </div>
  )
}

export default Rooms
