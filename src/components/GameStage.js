import React, { useState } from "react"

import Player from "./Player"

const availableHands = [
  {
    name: "Rock",
    value: "✊",
  },
  {
    name: "Paper",
    value: "✋",
  },
  {
    name: "Scissor",
    value: "✌",
  },
]

const randomizeHand = () => {
  const randomNumber = Math.floor(Math.random() * 3)
  return availableHands[randomNumber]
}

const GameStage = () => {
  const [yourHand, setYourHand] = useState("👤")
  const [computerHand, setCompHand] = useState("💻")
  const yourStyle = {
    gridArea: "1/1/span 2/span 1",
  }
  const computerStyle = {
    gridArea: "1/3/span 2/span 1",
  }
  return (
    <div style={{ display: "grid", gridTemplate: "1fr 2fr 1fr / 2fr 1fr 2fr" }}>
      <Player name="You" hand={yourHand} style={yourStyle}></Player>
      <div style={{ gridArea: "3/1/span 1/span 1" }}>
        {availableHands.map((hand, index) => {
          return (
            <button key={index} onClick={() => setYourHand(hand.value)}>
              {hand.name}
            </button>
          )
        })}
      </div>
      <Player
        name="Computer"
        hand={computerHand}
        style={computerStyle}
      ></Player>
    </div>
  )
}

export default GameStage
