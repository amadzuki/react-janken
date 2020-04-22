import React from "react"

const Player = (props) => {
  return (
    <div style={props.style}>
      <div>{props.name}</div>
      <div style={{ fontSize: "7em" }}>{props.hand}</div>
    </div>
  )
}

export default Player
