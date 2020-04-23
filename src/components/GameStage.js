import React, { useState } from "react"

import Player from "./Player"
import WinnerTag from "./WinnerTag"

const availableHands = [
  {
    name: "Rock",
    sign: "✊",
    value: 1,
  },
  {
    name: "Paper",
    sign: "✋",
    value: 2,
  },
  {
    name: "Scissor",
    sign: "✌",
    value: 3,
  },
]

const GameStage = () => {
  const [yourHand, setYourHand] = useState({ sign: "👤" })
  const [computerHand, setComputerHand] = useState({ sign: "🤖" })
  const [winner, setWinner] = useState()

  const randomizeHand = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    return availableHands[randomNumber]
  }

  const winnerAnnounce = (yourHand, computerHand) => {
    if (yourHand.value === 3 && computerHand.value === 1) {
      return "YOU LOSE"
    }
    if (yourHand.value === 1 && computerHand.value === 3) {
      return "YOU WIN"
    }
    if (yourHand.value === computerHand.value) {
      return "DRAW"
    }
    return yourHand.value > computerHand.value ? "YOU WIN" : "YOU LOSE"
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplate: "1fr 2fr 1fr 1fr/ 2fr 1fr 2fr",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Player name="You" hand={yourHand} gridColumn={1}></Player>
      <Player name="Computer" hand={computerHand} gridColumn={3}></Player>
      <div style={{ gridArea: "3/1/span 1/span 1" }}>
        {availableHands.map((hand, index) => {
          return (
            <button key={index} onClick={() => setYourHand(hand)}>
              {hand.name}
            </button>
          )
        })}
      </div>
      <div style={{ gridArea: "2/2/span 1/span 1", fontSize: "5em" }}>VS</div>
      <div style={{ gridArea: "3/2/span 1/span 1" }}>
        <button
          onClick={() => {
            setComputerHand(randomizeHand())
            setWinner(winnerAnnounce(yourHand, computerHand))
          }}
        >
          BATTLE
        </button>
      </div>
      <WinnerTag winner={winner}></WinnerTag>
    </div>
  )
}

export default GameStage
