import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

function App() {
  // const [activePlayer, setActivePlayer] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);

  // let currentPlayer = "X";

  // if (gameTurns.length > 0 && gameTurns[0].player === "X") {
  //   currentPlayer = "O";
  // }

  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    // setActivePlayer((prevActivePlayer) => prevActivePlayer === "X" ? "O" : "X");
    setGameTurns((prevTurns) => {
      // let currentPlayer = "X";

      // if (prevTurns.length > 0 && prevTurns[0].player === "X") {
      //   currentPlayer = "O";
      // }

      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        {
          square: {row: rowIndex, col: colIndex},
          player: currentPlayer,
        },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}/>
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
