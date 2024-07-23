import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import './ChessboardAbs.css'

export default function ChessboardAbs() {




  // Game State
  const [perspective, setPerspective] = useState("white");

  const [gameState, setGameState] = useState(
    [ ["wR","wN","wB","wQ","wK","wB","wN","wR"],
      ["wP","wP","wP","wP","wP","wP","wP","wP"],
      ["x","x","x","x","x","x","x","x"],
      ["x","x","x","x","x","x","x","x"],
      ["x","x","x","x","x","x","x","x"],
      ["x","x","x","x","x","x","x","x"],
      ["bP","bP","bP","bP","bP","bP","bP","bP"],
      ["bR","bN","bB","bQ","bK","bB","bN","bR"] ]
  );

  const togglePerspective = () => {
    setGameState(gameState.map(row=>row.reverse()).reverse());
    if (perspective == "white") {
      setPerspective("black");
    } else {
      setPerspective("white");
    }
  };





  // Highlighting Squares
  const [highlightedSquareList, setHighlightedSquareList] = useState<Array<HighlightedSquare>>([]);

  // const updateHighlightedSquares = useCallback((action: string, id: number, object: HighlightedSquare) => {
  //   const temp = highlightedSquareList;
  //   console.log("Adding new square");
  //   switch(action){
  //     case ("add"):
  //       temp.push(object);
  //       setHighlightedSquareList(temp); 
  //       break;
  //     default:
  //   }
  //   console.log("Added new square");
  //   console.log(highlightedSquareList);
  // }, [highlightedSquareList]);

  const updateHighlightedSquares = useCallback((action: string, id: number, object: HighlightedSquare) => {
    // const temp = JSON.parse(JSON.stringify(highlightedSquareList));
    // console.log("Adding new square");

    console.log("List before set:");
    console.log(highlightedSquareList);

    switch(action){
      case ("add"):
        // console.log("Temp before push:");
        // console.log(temp);

        // temp.push(object);
        
        // console.log("Temp after push:");
        // console.log(temp);

        setHighlightedSquareList([...highlightedSquareList, object]);
        // setHighlightedSquareList([object, object, object]);

        console.log("List after set:");
        console.log(highlightedSquareList);
        break;
      default:
    }
    // console.log("Added new square");
    // console.log(highlightedSquareList);
  }, [highlightedSquareList]);


  // Event handler
  // const mouseEventHandler = useCallback((event: MouseEvent) => {
  //   // console.log("Mouse event detected");
  //   try {
  //     const target = event.currentTarget! as HTMLDivElement;
  //     const rect = target.getBoundingClientRect();
  //     const x = event.clientX - rect.left; //x position within the board
  //     const y = event.clientY - rect.top;  //y position within the board
  
  //     const newSquare = {
  //       id:8,
  //       column: (Math.floor(x/100)),
  //       row: (Math.floor(y/100))
  //     }
  
  //     updateHighlightedSquares("add", 8, newSquare);

  //   } catch (error) {
  //     console.log(error);
  //   }
  
  // },[updateHighlightedSquares])

  const mouseEventHandler = useCallback((event: MouseEvent) => {
    // console.log("Mouse event detected");
    try {
      const target = event.currentTarget! as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left; //x position within the board
      const y = event.clientY - rect.top;  //y position within the board
  
      const newSquare = {
        id:8,
        column: (Math.floor(x/100)),
        row: (Math.floor(y/100))
      }

      // console.log("Before addign square:");
      // console.log(highlightedSquareList);
      updateHighlightedSquares("add", 8, newSquare);

    } catch (error) {
      console.log(error);
    }
  
  },[updateHighlightedSquares])

  useEffect(() => {

    document.getElementById("gameBoard")?.addEventListener('click', mouseEventHandler);

    return () => { 
      document.getElementById("gameBoard")?.removeEventListener('click', mouseEventHandler);
    };

  }, [mouseEventHandler]);


  useEffect(() => {
    console.log("HS Squre changedd!");
    console.log(highlightedSquareList);
  }, [highlightedSquareList])

  return (
    <>
      <p> Hello world! </p>
      {console.log("rerender")}
      <button onClick={() => togglePerspective()} >Switch Side</button>
      <p>You are playing from {perspective} perspective</p>
      
      <div id="gameBoard" className="boardContainer">

        <BoardTiles perspective = {perspective} />

        <HighlightedTiles HighlightedSquares = {highlightedSquareList}/>

        <BoardCoordinates perspective = {perspective}/>

        <DisplayPieces gameState = {gameState}></DisplayPieces>

      </div>
    </>
  )

}


//Functional Components
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

interface HighlightedSquaresProps {
  HighlightedSquares: HighlightedSquare[];
}


function HighlightedTiles({HighlightedSquares} : HighlightedSquaresProps) {
  const rowClasses = ["highlightRow1","highlightRow2","highlightRow3","highlightRow4","highlightRow5","highlightRow6","highlightRow7","highlightRow8"];
  const colClasses = ["highlightCol1","highlightCol2","highlightCol3","highlightCol4","highlightCol5","highlightCol6","highlightCol7","highlightCol8"];
  let highlightClassname = "";
  console.log("Rendering Highlights");
  console.log(HighlightedSquares);
  HighlightedSquares
  
  return (
    <>
      {HighlightedSquares.map((item) => {
        highlightClassname = "highlightedSquare" + " " + rowClasses[7 - item.row] + " " + colClasses[item.column];
        // console.log("Creating highlight");
        // console.log(item);
        return (
          <div className={highlightClassname}/>
        )
      })}
    </>
  );
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

interface HighlightedSquare {
  id: number;
  column: number;
  row: number;
}

interface gameStateProps {
  gameState: string[][];
}

function DisplayPieces({gameState} : gameStateProps) {
  const rowClasses = ["pieceRow1","pieceRow2","pieceRow3","pieceRow4","pieceRow5","pieceRow6","pieceRow7","pieceRow8"];
  const colClasses = ["pieceCol1","pieceCol2","pieceCol3","pieceCol4","pieceCol5","pieceCol6","pieceCol7","pieceCol8"];
  let pieceClassname = "";

  return (
    <>
      {gameState.map((items, index) => {
        return (
          <>
            {items.map((subItems, sindex) => {
              pieceClassname = "piece" + " " + rowClasses[index] + " " + colClasses[sindex];
              if (gameState[index][sindex] != "x") {
                return (
                  <div className={pieceClassname}>
                    <p className="pieceText">{gameState[index][sindex]}</p>
                  </div>
                )
              } else {
                return(
                  <></>
                )
              }

            })}
          </>
        );
      })}
    </>
  );
}