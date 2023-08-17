import React, { useEffect, useState } from 'react'
import SquareComponent from './SquareComponent';

const TicTacToe = () => {

  const initialarray = ["", "", "", "", "", "", "", "", ""]
  const [game, gameState] = useState(initialarray)
  const [turn, setTurn] = useState(true)
  const [drawCheck, setDrawCheck] = useState(true)
  const [forDraw, setForDraw] = useState(false)
  const [winner, setWinner] = useState()
  const [player1, setPlayer1] = useState("")
  const [player2, setPlayer2] = useState("")
  const [pp1, setP1] = useState("")
  const [pp2, setP2] = useState("")

  const Confirm = () => {
    setP1(player1)
    setP2(player2)
    alert(`Player 1 is ${player1} and Player 2 is ${player2}. Let's Start the Game`)
  }

  const fillSquare = (index) => {

    turn === true ? game[index] = "X" : game[index] = "O";
    turn === true ? setTurn(false) : setTurn(true)

  }

  useEffect(() => {
    checkWinner()
  }, [game[0], game[1], game[2], game[3], game[4], game[5], game[6], game[7], game[8]])

  const emptyStates = () => {

    game[0] = ""
    game[1] = ""
    game[2] = ""
    game[3] = ""
    game[4] = ""
    game[5] = ""
    game[6] = ""
    game[7] = ""
    game[8] = ""
    setPlayer1("")
    setPlayer2("")
    setP1("")
    setP2("")
    setWinner()
    setDrawCheck(true)
    setForDraw(false)
    setTurn(true)

  }

  const Result = (value) => {

    setForDraw(true)

    if (value === true) {
      setWinner(value)
    }

    else if (value === false) {
      setWinner(value)
    }

  }

  const checkWinner = () => {

    //0 1 2
    if (game[0] === "X" && game[1] === "X" && game[2] === "X") {

      const updatedGame = [...game];
      updatedGame[0] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[1] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[2] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      gameState(updatedGame);
      Result(true)
      return;
    }

    else if (game[0] === "O" && game[1] === "O" && game[2] === "O") {
      const updatedGame = [...game];
      updatedGame[0] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[1] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[2] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      gameState(updatedGame);
      Result(false)
      return;
    }

    //3 4 5
    else if (game[3] === "X" && game[4] === "X" && game[5] === "X") {
      const updatedGame = [...game];
      updatedGame[3] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[4] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[5] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      gameState(updatedGame);
      Result(true)
      return;
    }
    else if (game[3] === "O" && game[4] === "O" && game[5] === "O") {
      const updatedGame = [...game];
      updatedGame[3] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[4] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[5] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      gameState(updatedGame);
      Result(false)
      return;
    }

    //6 7 8
    else if (game[6] === "X" && game[7] === "X" && game[8] === "X") {
      const updatedGame = [...game];
      updatedGame[6] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[7] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[8] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      gameState(updatedGame);
      Result(true)
      return;
    }
    else if (game[6] === "O" && game[7] === "O" && game[8] === "O") {
      const updatedGame = [...game];
      updatedGame[6] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[7] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[8] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      gameState(updatedGame);
      Result(false)
      return;
    }

    //0 3 6
    else if (game[0] === "X" && game[3] === "X" && game[6] === "X") {
      const updatedGame = [...game];
      updatedGame[0] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[3] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[6] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      gameState(updatedGame);
      Result(true)
      return;
    }
    else if (game[0] === "O" && game[3] === "O" && game[6] === "O") {
      const updatedGame = [...game];
      updatedGame[0] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[3] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[6] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      gameState(updatedGame);
      Result(false)
      return;
    }

    //1 4 7
    else if (game[1] === "X" && game[4] === "X" && game[7] === "X") {
      const updatedGame = [...game];
      updatedGame[1] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[4] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[7] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      gameState(updatedGame);
      Result(true)
      return;
    }
    else if (game[1] === "O" && game[4] === "O" && game[7] === "O") {
      const updatedGame = [...game];
      updatedGame[1] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[4] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[7] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      gameState(updatedGame);
      Result(false)
      return;
    }

    //2 5 8
    else if (game[2] === "X" && game[5] === "X" && game[8] === "X") {
      const updatedGame = [...game];
      updatedGame[2] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[5] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[8] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      gameState(updatedGame);
      Result(true)
      return;
    }
    else if (game[2] === "O" && game[5] === "O" && game[8] === "O") {
      const updatedGame = [...game];
      updatedGame[2] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[5] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[8] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      gameState(updatedGame);
      Result(false)
      return;
    }

    //0 4 8
    else if (game[0] === "X" && game[4] === "X" && game[8] === "X") {
      const updatedGame = [...game];
      updatedGame[0] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[4] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[8] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      gameState(updatedGame);
      Result(true)
      return;
    }
    else if (game[0] === "O" && game[4] === "O" && game[8] === "O") {
      const updatedGame = [...game];
      updatedGame[0] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[4] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[8] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      gameState(updatedGame);
      Result(false)
      return;
    }

    //2 4 6
    else if (game[2] === "X" && game[4] === "X" && game[6] === "X") {
      const updatedGame = [...game];
      updatedGame[2] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[4] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      updatedGame[6] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>X</div>;
      gameState(updatedGame);
      Result(true)
      return;
    }
    else if (game[2] === "O" && game[4] === "O" && game[6] === "O") {
      const updatedGame = [...game];
      updatedGame[2] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[4] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      updatedGame[6] = <div style={{ backgroundColor: "rgb(23, 23, 23)", height: "95px", marginTop: "-22px", lineHeight: "80px" }}>O</div>;
      gameState(updatedGame);
      Result(false)
      return;
    }

    else if (game[0] !== "" && game[1] !== "" && game[2] !== "" && game[3] !== "" && game[4] !== "" && game[5] !== "" && game[6] !== "" && game[7] !== "" && game[8] !== "" && forDraw === false ) {
      setDrawCheck(false)
      return;
    }
  }

  return (

    <div className='tictac'>
      <br />
      <div className='namess'>
        <h1> Welcome to Tic-Tac-Toe Game</h1>
      </div>

      {pp1 === "" && pp2 === "" ? (
        <div className='names'>
          <input className='inputt' placeholder='Enter Player 1 Name' value={player1} onChange={(e) => setPlayer1(e.target.value)} />
          <br />
          <br />
          <input className='inputt' placeholder='Enter Player 2 Name' value={player2} onChange={(e) => setPlayer2(e.target.value)} />
          <br />
          <br />
          {player1 !== "" && player2 !== "" ? (
            <button className='button-3' onClick={Confirm}> Confirm </button>
          ) : (
            <button disabled className='button-3' onClick={Confirm}> Confirm </button>
          )}
        </div>
      ) : winner === true ? (
        <div className='names'>
          <h2 style={{letterSpacing:"1px"}}> {player1} wins </h2>
        </div>
      ) : winner === false ? (
        <div className='names'>
          <h2 style={{letterSpacing:"1px"}}> {player2} wins </h2>
        </div>
      ) : game[0] !== "" && game[1] !== "" && game[2] !== "" && game[3] !== "" && game[4] !== "" && game[5] !== "" && game[6] !== "" && game[7] !== "" && game[8] !== "" && drawCheck === false ? (
        <div className='names'>
          <h2 style={{letterSpacing:"1px"}}> Game Drawn </h2>
        </div>
      ) : (
        <div className='names'>
          <h2> {pp1} Symbol is: X </h2>
          <h2> {pp2} Symbol is: O </h2>
        </div>
      )}

      <br />

      {pp1 !== "" && pp2 !== "" ?
        <>
          <div style={{ display: 'flex', width: "17rem", margin: "0 auto" }}>
            <SquareComponent state={game[0]} onClick={() => fillSquare(0)} />
            <SquareComponent state={game[1]} onClick={() => fillSquare(1)} />
            <SquareComponent state={game[2]} onClick={() => fillSquare(2)} />
          </div>
          <div style={{ display: 'flex', width: "17rem", margin: "0 auto" }}>
            <SquareComponent state={game[3]} onClick={() => fillSquare(3)} />
            <SquareComponent state={game[4]} onClick={() => fillSquare(4)} />
            <SquareComponent state={game[5]} onClick={() => fillSquare(5)} />
          </div>
          <div style={{ display: 'flex', width: "17rem", margin: "0 auto" }}>
            <SquareComponent state={game[6]} onClick={() => fillSquare(6)} />
            <SquareComponent state={game[7]} onClick={() => fillSquare(7)} />
            <SquareComponent state={game[8]} onClick={() => fillSquare(8)} />
          </div>
          <br />
          <br />

          {winner === true || winner === false || drawCheck === false ?
            <button className="button-82-pushable" role="button" onClick={emptyStates}>
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">Start Again</span>
            </button>
            :
            null}

        </>
        :
        null}


    </div>


  )
}

export default TicTacToe;
