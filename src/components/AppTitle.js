import React from "react"

const AppTitle = (props) => {
  return (
    <h1
      style={{
        textAlign: "center",
        borderBottom: "double 2px",
      }}
    >
      {props.title}
    </h1>
  )
}

export default AppTitle
