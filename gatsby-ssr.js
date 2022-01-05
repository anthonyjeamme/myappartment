import React from "react"

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
  ...props
}) => {
  const headComponents = getHeadComponents()

  console.log("onPreRenderHTML", props.pathname)

  replaceHeadComponents([
    <title key="A">La chatte a ta patronne</title>,
    ...headComponents.filter(component => component.type !== "title"),
  ])
}
