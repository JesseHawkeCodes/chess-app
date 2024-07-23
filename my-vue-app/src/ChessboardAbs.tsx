import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import './ChessboardAbs.css'

export default function ChessboardAbs() {

  //////////// Game State ////////////
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

  const [inputState, setinputState] = useState({
    isSelected: false,
    selectedSquare: [0,0]
  });

  //////////// Highlighting Squares ////////////
  const [selectionSquare, setSelectionSquare] = useState({id: 0, column: 0, row: 0});

  const [highlightedSquareList, setHighlightedSquareList] = useState<Array<HighlightedSquare>>([]);

  const updateHighlightedSquares = useCallback((action: string, id: number, object: HighlightedSquare) => {
    switch(action){
      case ("add"):
        setHighlightedSquareList([...highlightedSquareList, object]);

        break;
      default:
    }
  }, [highlightedSquareList]);

  //////////// Move logic ////////////

  const getValidMoves = useCallback((piece: string, row: number, col: number) => {
    switch(piece){
      case('wP'):
      case('bP'):
      defualt:
    }

  },[])

  //////////// Event handling ////////////

  const mouseEventHandler = useCallback((event: MouseEvent) => {
    try {
      const target = event.currentTarget! as HTMLDivElement;
      const rect = target.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const col = Math.floor(x/100);
      const row = 7 - (Math.floor(y/100));
      console.log(inputState.isSelected, gameState[row][col]);

      if (inputState.isSelected == false && gameState[row][col] != "x"){
        const newSquare = {
          id:8,
          column: col,
          row: row
        }
  
        setinputState({
          isSelected: true,
          selectedSquare: [row,col]
        })
        setSelectionSquare({id: 1, column:col, row:row});
        // updateHighlightedSquares("add", 8, newSquare);

      } else if (inputState.isSelected == true) {

          const validMoves = getValidMoves(row, col);

          const piece = gameState[inputState.selectedSquare[0]][inputState.selectedSquare[1]] ;
          const tempState = [...gameState];

          tempState[row][col] = piece;
          tempState[inputState.selectedSquare[0]][inputState.selectedSquare[1]] = "x";
          console.log(tempState);
          setGameState(tempState);
          setinputState({isSelected: false, selectedSquare: [0,0]});
      }

    } catch (error) {
      console.log(error);
    }
  
  },[gameState, inputState]); //updateHighlightedSquares])

  // Add listeners here
  useEffect(() => {

    document.getElementById("gameBoard")?.addEventListener('click', mouseEventHandler);

    return () => { 
      document.getElementById("gameBoard")?.removeEventListener('click', mouseEventHandler);
    };

  }, [mouseEventHandler]);


  //////////// Testing ////////////

  // useEffect(() => {
  //   console.log("HS Squre changedd!");
  //   console.log(highlightedSquareList);
  // }, [highlightedSquareList])



  //////////// Rendering ////////////
  return (
    <>
      <p> Hello world! </p>
      {console.log("rerender")}
      <button onClick={() => togglePerspective()} >Switch Side</button>
      <p>You are playing from {perspective} perspective</p>
      
      <div id="gameBoard" className="boardContainer">

        <BoardTiles perspective = {perspective} />

        {/* <HighlightedTiles HighlightedSquares = {highlightedSquareList}/> */}

        <SelectionSquare square = {selectionSquare} selected = {inputState.isSelected}></SelectionSquare>

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
  
  return (
    <>
      {HighlightedSquares.map((item) => {
        highlightClassname = "highlightedSquare" + " " + rowClasses[item.row] + " " + colClasses[item.column];

        return (
          <div className={highlightClassname}/>
        )
      })}
    </>
  );
}

interface SelectionSquareProps {
  square: HighlightedSquare;
  selected: boolean;
}

function SelectionSquare({square, selected} : SelectionSquareProps) {
  const rowClasses = ["highlightRow1","highlightRow2","highlightRow3","highlightRow4","highlightRow5","highlightRow6","highlightRow7","highlightRow8"];
  const colClasses = ["highlightCol1","highlightCol2","highlightCol3","highlightCol4","highlightCol5","highlightCol6","highlightCol7","highlightCol8"];
  const squareClassname = "highlightedSquare" + " " + rowClasses[square.row] + " " + colClasses[square.column];


  if(selected) {
    return(<div className={squareClassname}/>);
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