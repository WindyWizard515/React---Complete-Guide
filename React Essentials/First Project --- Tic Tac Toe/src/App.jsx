import { useState } from "react"

import Player from "./Components/Player.jsx"
import GameBoard from "./Components/GameBoard.jsx"
import Log from "./Components/Log.jsx"
import { WINNING_COMBINATIONS } from "../winning-combinations.js"

function getActivePlayer(gameTurns) {
    let currentPlayer = "X"

    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer= "O"
    }

    return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([])

  const activePlayer = getActivePlayer(gameTurns)

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      let currentPlayer = getActivePlayer(prevTurns)
      
      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer= "O"
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
    
      return updatedTurns
    })

  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
