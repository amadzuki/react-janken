import React from "react"

const WinnerTag = (props) => {
  return (
    <div style={{ gridArea: "4/2/span 1/span 1" }}>
      <div>{props.winner}</div>
    </div>
  )
}

export default WinnerTag
