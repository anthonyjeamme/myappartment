export const scrollToNextItem = containerRef => {
  const currentIndex = findCurrentImageIndex(containerRef)
  containerRef.current.scrollTo({
    left: getChildOffsetLeft(containerRef, currentIndex + 1),
    behavior: "smooth",
  })
}

export const scrollToPreviousItem = containerRef => {
  const currentIndex = findCurrentImageIndex(containerRef)
  containerRef.current.scrollTo({
    left: getChildOffsetLeft(containerRef, Math.max(0, currentIndex - 1)),
    behavior: "smooth",
  })
}

export const findCurrentImageIndex = containerRef => {
  const container = containerRef.current as HTMLDivElement
  let i = 0
  for (const child of container.children) {
    if ((child as HTMLDivElement).offsetLeft >= container.scrollLeft) return i
    i++
  }

  return null
}

export const getChildOffsetLeft = (containerRef, index) => {
  return containerRef.current.children[index]?.offsetLeft
}
