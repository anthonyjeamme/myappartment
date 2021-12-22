import React, { useRef } from "react"
import Container from "../../Common/Container/Container"

import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react"

import { useGallerySection } from "./GallerySection.hook"

import "./GallerySection.scss"
import { useModal } from "../../Common/Modal/Modal.hook"
import GallerySectionModal from "./GallerySectionModal/GallerySectionModal"
import { getCloudinaryURL } from "../../../utils/cloudinary"

const GallerySection = ({
  title,
  description,
  gallery,
}: TGallerySectionProps) => {
  const imageContainerRef = useRef<HTMLDivElement>()
  const gallerySection = useGallerySection(imageContainerRef)
  const galleryModal = useModal()

  return (
    <div className="GallerySection">
      <GallerySectionModal {...galleryModal} gallery={gallery}>
        Super
      </GallerySectionModal>
      <Container>
        <header>
          <div>
            <h2>{title}</h2>

            <div className="description">{description}</div>
          </div>

          <div className="gallery-navigation">
            <button onClick={gallerySection.previous} title="Précédent">
              <ArrowCircleLeft size={48} weight="light" />
            </button>
            <button onClick={gallerySection.next} title="Suivant">
              <ArrowCircleRight size={48} weight="light" />
            </button>
          </div>
        </header>
      </Container>

      <div className="images" ref={imageContainerRef}>
        {gallery.map(({ public_id, title }, index) => (
          <div
            className="image-container"
            role="button"
            onClick={() => {
              galleryModal.open({ index })
            }}
          >
            <img src={getCloudinaryURL(public_id, { h: 500 })} />

            {title && <div className="title">{title}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GallerySection

type TGallerySectionProps = {
  title: string
  description: string | JSX.Element
  gallery: TGallerySectionItem[]
}

export type TGallerySectionItem = {
  public_id: string
  title?: string
}
