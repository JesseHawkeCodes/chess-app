import React from 'react'
import { useState } from 'react'
import './ChessboardAbs.css'

export default function ChessboardAbs() {

  const [perspective, setPerspective] = useState("white");

  // const [boardState, setBoardState = useState();

  const togglePerspective = () => {
    if (perspective == "white") {
      setPerspective("black");
    } else {
      setPerspective("white");
    }
  };

  return (
    <>
      <p> Hello world! </p>

      <button onClick={() => togglePerspective()} >Switch Side</button>
      <div className="boardContainer">

        <BoardTiles perspective = {perspective} />

        <BoardCoordinates perspective = {perspective} />

        {/* Show pieces */}
      </div>
    </>
  )

}

interface perspectiveProps {
  perspective: string;
}

function BoardTiles({perspective} : perspectiveProps) {
  
  if(perspective == "white") {
    return(
      <div className="board">
        {/* Row 1 */}
        
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>

        {/* Row 2 */}
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>

        {/* Row 3 */}
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>

        {/* Row 4 */}
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>

        {/* Row 5 */}
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>

        {/* Row 6 */}
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>

        {/* Row 7 */}
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>

        {/* Row 8 */}
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
      </div>
    )
  } else {
    return(
      <div className="board">
        {/* Row 1 */}
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>

        {/* Row 2 */}
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>

        {/* Row 3 */}
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>

        {/* Row 4 */}
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>

        {/* Row 5 */}
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>

        {/* Row 6 */}
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>

        {/* Row 7 */}
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>

        {/* Row 8 */}
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>
        <div className="tile lightSquare"> </div>
        <div className="tile darkSquare"> </div>

      </div>
    )
  }
}

function BoardCoordinates({perspective} : perspectiveProps) {
  if (perspective == "white") {
    return(
      <>
        <div className="coordinateLabel coordinateLabelColumn1">
          <p className="coordinateLabelTextLight">A</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn2">
          <p className="coordinateLabelTextDark">B</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn3">
          <p className="coordinateLabelTextLight">C</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn4">
          <p className="coordinateLabelTextDark">D</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn5">
          <p className="coordinateLabelTextLight">E</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn6">
          <p className="coordinateLabelTextDark">F</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn7">
          <p className="coordinateLabelTextLight">G</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn8">
          <p className="coordinateLabelTextDark">H</p>
        </div>

        <div className="coordinateLabel coordinateLabelRow1">
          <p className="coordinateLabelTextLight">1</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow2">
          <p className="coordinateLabelTextDark">2</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow3">
          <p className="coordinateLabelTextLight">3</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow4">
          <p className="coordinateLabelTextDark">4</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow5">
          <p className="coordinateLabelTextLight">5</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow6">
          <p className="coordinateLabelTextDark">6</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow7">
          <p className="coordinateLabelTextLight">7</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow8">
          <p className="coordinateLabelTextDark">8</p>
        </div>
      </>
    )
  } else {
    return(
      <>
        <div className="coordinateLabel coordinateLabelColumn1">
          <p className="coordinateLabelTextDark">H</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn2">
          <p className="coordinateLabelTextLight">G</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn3">
          <p className="coordinateLabelTextDark">F</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn4">
          <p className="coordinateLabelTextLight">E</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn5">
          <p className="coordinateLabelTextDark">D</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn6">
          <p className="coordinateLabelTextLight">C</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn7">
          <p className="coordinateLabelTextDark">B</p>
        </div>
        <div className="coordinateLabel coordinateLabelColumn8">
          <p className="coordinateLabelTextLight">A</p>
        </div>

        <div className="coordinateLabel coordinateLabelRow1">
          <p className="coordinateLabelTextDark">8</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow2">
          <p className="coordinateLabelTextLight">7</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow3">
          <p className="coordinateLabelTextDark">6</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow4">
          <p className="coordinateLabelTextLight">5</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow5">
          <p className="coordinateLabelTextDark">4</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow6">
          <p className="coordinateLabelTextLight">3</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow7">
          <p className="coordinateLabelTextDark">2</p>
        </div>
        <div className="coordinateLabel coordinateLabelRow8">
          <p className="coordinateLabelTextLight">1</p>
        </div>
      </>
    )
  }
}