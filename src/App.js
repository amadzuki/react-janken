import React from "react"

import AppTitle from "./components/AppTitle"
import GameStage from "./components/GameStage"

const App = () => {
  return (
    <main>
      <AppTitle title="Janken Battle"></AppTitle>
      <GameStage></GameStage>
    </main>
  )
}
export default App
