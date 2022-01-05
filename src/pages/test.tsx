import React from "react"

const test = ({ ...props }) => {
  console.log(props)
  return <div className="test">Test !</div>
}
export default test

export const getServerData = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        message: "Super",
      })
    }, 1000)
  })
}
