import { scrollToNextItem, scrollToPreviousItem } from "./GallerySection.utils"

export const useGallerySection = imageContainerRef => {
  const next = () => {
    scrollToNextItem(imageContainerRef)
  }

  const previous = () => {
    scrollToPreviousItem(imageContainerRef)
  }

  return {
    next,
    previous,
  }
}
