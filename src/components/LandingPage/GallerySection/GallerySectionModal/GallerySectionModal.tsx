import React, { useEffect, useState } from "react"
import { ArrowCircleLeft, ArrowCircleRight } from "phosphor-react"

import Modal from "../../../Common/Modal/Modal"
import { TModalComponentProps } from "../../../Common/Modal/Modal.types"
import { TGallerySectionItem } from "../GallerySection"

import "./GallerySectionModal.scss"
import { getCloudinaryURL } from "../../../../utils/cloudinary"

const GallerySectionModal: React.FC<TGallerySectionModalProps> = ({
  gallery,
  payload,
  ...galleryModal
}) => {
  const [index, setIndex] = useState(payload?.index || 0)

  useEffect(() => {
    if (galleryModal.isOpen) {
      setIndex(payload?.index || 0)
    }
  }, [galleryModal.isOpen])

  const handlePrevious = () => {
    setIndex(index => (index - 1 + gallery.length) % gallery.length)
  }

  const handleNext = () => {
    setIndex(index => (index + 1) % gallery.length)
  }

  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.key)

      if (e.key === "Escape") {
        galleryModal.close()
      }

      if (e.key === "ArrowRight") {
        handleNext()
      }
      if (e.key === "ArrowLeft") {
        handlePrevious()
      }
    }

    if (galleryModal.isOpen) {
      window.addEventListener("keydown", handleKeyDown)

      return () => {
        window.removeEventListener("keydown", handleKeyDown)
      }
    }
  }, [galleryModal.isOpen])

  return (
    <Modal {...galleryModal}>
      <div className="GallerySectionModal">
        <button className="previous" onClick={handlePrevious}>
          <ArrowCircleLeft />
        </button>
        <div className="image-container">
          <img src={getCloudinaryURL(gallery[index]?.public_id, {})} />
          <div className="title">{gallery[index]?.title}</div>
        </div>
        <button className="next" onClick={handleNext}>
          <ArrowCircleRight />
        </button>
      </div>
    </Modal>
  )
}
export default GallerySectionModal

type TGallerySectionModalProps = {
  gallery: TGallerySectionItem[]
} & TModalComponentProps
