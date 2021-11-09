import React from "react"

import { Helmet } from "react-helmet"

const TestSSR = ({ serverData, ...props }) => {
  return (
    <div className="ssr">
      <Helmet>
        <title>{serverData.metadata.title}</title>
      </Helmet>
      <div>{serverData?.message}</div>
    </div>
  )
}

export async function getServerData() {
  return {
    headers: {
      message: "hello world",
    },
    props: {
      metadata: {
        title: "XXXXX",
      },
    },
  }
}

export default TestSSR
