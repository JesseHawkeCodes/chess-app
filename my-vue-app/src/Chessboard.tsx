import React from 'react'
import './Chessboard.css'

export default function Chessboard() {
  return (
    <>
      <p> Hello world! </p>
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
        <div className="tile darkSquare">
          <div className="rowNotationDiv redBG">
            {/* <p className="rowNotationText redBG" color="white">A</p> */}
          </div>
          <div className="columnNotationDiv">
            <p className="columnNotationText" color="white">A</p>
          </div>
        </div>
        <div className="tile lightSquare columnNotationB"> </div>
        <div className="tile darkSquare columnNotationC"> </div>
        <div className="tile lightSquare columnNotationD"> </div>
        <div className="tile darkSquare columnNotationE"> </div>
        <div className="tile lightSquare columnNotationF"> </div>
        <div className="tile darkSquare columnNotationG"> </div>
        <div className="tile lightSquare columnNotationH"> </div>

      </div>
    </>
  )

}
