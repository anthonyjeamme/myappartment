import React from "react"

import { Helmet } from "react-helmet"

const TestSSR = ({ serverData, ...props }) => {
  const handleTestRequest = () => {
    var myHeaders = new Headers()

    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYXBpIiwiaWF0IjoxNjM2MTA1NTc2LCJleHAiOjE2Njc2NDE1NzZ9.GgI0C6nL1PwcuHErsdaksIoevN67AnYnrYY4R1wB2Cc"
    )

    myHeaders.append("Content-Type", "application/json")

    fetch("https://comptes.coq-trotteur.com/api/accounts/current/permissions", {
      method: "POST",
      headers: myHeaders,

      body: JSON.stringify({
        accountToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYjQ2MGMwZjJmYmJkMDY1MGE4ZDQzMSIsImFjY291bnRJZCI6IjYxNjlmMjY0ODg4MGM2NjRiOGZhYzk0ZSIsInBsYXRlZm9ybSI6IjYxNjlmMzUwNmM1NTM3NGMyMGRlMjJhZSIsInR5cGUiOiJhY2NvdW50IiwiaWF0IjoxNjM2MTQwMzA3LCJleHAiOjE2Njc2NzYzMDd9.bWUS-xZmQsmMsiQTQVims6iSu7-O9fZHpLWHyao1k6Q",
      }),
    }).then(data => {
      console.log(data)
    })
    //
  }

  return (
    <div className="ssr">
      <Helmet>
        <title>{serverData.metadata.title}</title>
      </Helmet>

      <button
        onClick={() => {
          handleTestRequest()
        }}
      >
        test
      </button>
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
