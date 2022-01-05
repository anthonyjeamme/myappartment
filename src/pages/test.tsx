import React from "react"
import withSideEffect from "react-side-effect"

const Test = ({ serverData }) => {
  return (
    <div className="test">
      <h1>Titre : {serverData.title}</h1>
      <p>{serverData.description}</p>
    </div>
  )
}

function reducePropsToState(propsList) {
  var innermostProps = propsList[propsList.length - 1]

  if (innermostProps) {
    console.log(innermostProps.serverData)
    return innermostProps.serverData
  }
}

function handleStateChangeOnClient(data) {
  console.log(data)

  //   document.title = data.title
}

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(Test)

const timeout = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms))

export const getServerData = async () => {
  console.log("GET SERVER DATA")

  await timeout()
  return {
    status: 200, // The HTTP status code that should be returned
    props: {
      title: "Bienvenue sur mon site",
      description: "Ceci est la description de mon site super propre.",
    }, // Will be passed to the page component as "serverData" prop
    headers: {}, // HTTP response headers for this page
  }
}
