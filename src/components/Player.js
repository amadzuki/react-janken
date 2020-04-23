import React, { Fragment } from "react"

const Player = (props) => {
  return (
    <Fragment>
      <div
        style={{
          gridArea: `1/${props.gridColumn}/span 1/span 1`,
          fontWeight: "bold",
        }}
      >
        {props.name}
      </div>
      <div
        style={{
          gridArea: `2/${props.gridColumn}/span 1/span 1`,
          fontSize: "7em",
          maxHeight: "132px",
        }}
      >
        {props.hand.sign}
      </div>
    </Fragment>
  )
}

export default Player
