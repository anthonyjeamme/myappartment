import React from "react"

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()

  console.log("XXXXXXX")

  replaceHeadComponents([
    <title key="A">La chatte a ta patronne</title>,
    ...headComponents.filter(component => component.type !== "title"),
  ])
}
