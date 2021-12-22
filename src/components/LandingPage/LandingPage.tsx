import React from "react"
import CoOwnership from "./CoOwnership/CoOwnership"
import Description from "./Description/Description"
import GallerySection from "./GallerySection/GallerySection"
import Map from "./Map/Map"
import Presentation from "./Presentation/Presentation"
import Proximity from "./Proximity/Proximity"
import Rooms from "./Rooms/Rooms"
import TechnicalDetails from "./TechnicalDetails/TechnicalDetails"

import "./LandingPage.scss"

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Presentation />
      {/* <Description /> */}
      <GallerySection
        title="La cuisine"
        description={<p></p>}
        gallery={[
          {
            public_id: "appart/1640179338882_qdxtmj",
          },
          {
            public_id: "appart/1640179339222_izni9h",
          },
          {
            public_id: "appart/1640179338899_baiqdg",
          },
          {
            public_id: "appart/1640179339244_x4tmyi",
            title: "Un grand frigo Ikea",
          },

          {
            public_id: "appart/1640179339239_dbzypv",
            title: "Un grand frigo Ikea",
          },
          {
            public_id: "appart/1640179339233_gsqect",
          },
        ]}
      />

      <GallerySection
        title="Le salon"
        description={<p></p>}
        gallery={[
          {
            public_id: "appart/1640179338985_njvkrs",
          },
          {
            public_id: "appart/1640179338893_rhpyjm",
          },
          {
            public_id: "appart/1640179339215_euwot9",
          },
          {
            public_id: "appart/1640179338996_wndc4h",
          },
          {
            public_id: "appart/1640179338975_carffe",
          },
          {
            public_id: "appart/1640179339150_trcicg",
          },
          {
            public_id: "appart/1640179339034_orze4m",
          },
          {
            public_id: "appart/1640179339054_bf3bdt",
          },
          {
            public_id: "appart/1640179339156_teqoe5",
          },

          {
            public_id: "appart/1640179338963_lhxnst",
          },
          {
            public_id: "appart/1640179338953_pyertv",
          },
          {
            public_id: "appart/1640179339202_smbm9u",
          },
        ]}
      />

      <GallerySection
        title="La salle de bain"
        description={<p></p>}
        gallery={[
          {
            public_id: "appart/1640179338864_vjeeh7",
          },
          {
            public_id: "appart/1640179338848_zkti9j",
          },
          {
            public_id: "appart/1640179338842_rwqb3v",
          },
          {
            public_id: "appart/1640179338812_gru3zw",
          },
          {
            public_id: "appart/1640179338837_isiw7s",
          },
          {
            public_id: "appart/1640179338854_thres3",
          },
          {
            public_id: "appart/1640179338817_nd37oa",
          },
          {
            public_id: "appart/1640179338831_e6lsd1",
          },
          {
            public_id: "appart/1640179339250_p5eroc",
          },
        ]}
      />

      <GallerySection
        title="La mezzanine"
        description={<p></p>}
        gallery={[
          {
            public_id: "appart/1640179339162_lzum2g",
          },
          {
            public_id: "appart/1640179338921_pssrmo",
          },
          {
            public_id: "appart/1640179338925_nchqu7",
          },
          {
            public_id: "appart/1640179338931_vqknzb",
          },
          {
            public_id: "appart/1640179338936_ac0gmd",
          },
          {
            public_id: "appart/1640179339193_ypmx15",
          },
        ]}
      />

      <GallerySection
        title="L'immeuble"
        description={<p></p>}
        gallery={[
          {
            public_id: "appart/1640179339186_mjjqil",
          },
          {
            public_id: "appart/1640179339173_klp6w9",
          },

          {
            public_id: "appart/1640179339094_v19u93",
          },
          {
            public_id: "appart/1640179339109_xd7k6k",
          },
          {
            public_id: "appart/1640179339099_panlgv",
          },
          {
            public_id: "appart/1640179339082_syzf68",
          },
          {
            public_id: "appart/1640179339087_erzccc",
          },
          {
            public_id: "appart/1640179339115_z2d89h",
          },
          {
            public_id: "appart/1640179339104_d0lfpf",
          },
          {
            public_id: "appart/1640179339076_ukg8x4",
          },
          {
            public_id: "appart/1640179339180_qnhdwx",
          },
        ]}
      />

      <GallerySection
        title="Le quartier"
        description={<p></p>}
        gallery={[
          {
            public_id: "appart/1640179339127_pkmosr",
          },
          {
            public_id: "appart/1640179339138_qbafxk",
          },
          {
            public_id: "appart/1640179339121_jizl5l",
          },
          {
            public_id: "appart/1640179339071_q0leiq",
            title: "Des places gratuites à 3 minutes à pied",
          },
          {
            public_id: "appart/1640179339071_q0leiq",
          },
        ]}
      />

      {/* 
      <Rooms />
      <Proximity />
      <TechnicalDetails />
      <CoOwnership /> */}
      {/* <Map /> */}
    </div>
  )
}
export default LandingPage
