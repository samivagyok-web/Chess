import { useState } from 'react';
import './App.css';
import Board from './features/entities/Board';

function App() {
  const [board, setBoard] = useState<Board>(new Board("Sami", "Rebi"));
  
  const asd = (idx: number, nestedIdx: number) => {
    console.log(idx)
    console.log(nestedIdx)

    return <></>
  }

  return (
    <div style={{marginTop: "5%"}}>
      {board.board.map((item, idx) => {
        return (
          <div style={{display: "flex", justifyContent: "center", height: 45}}>
            {              
              item.map((nestedItem, nestedIdx) => {
                return (
                  nestedItem != undefined
                    ?
                  <div style={{backgroundColor: (idx + nestedIdx) % 2 != 0 ? "#769656" : "white"}}>
                    {nestedItem?.SVG}
                  </div>
                    :
                  <div style={{width: 45, height: 45, backgroundColor: (idx + nestedIdx) % 2 != 0 ? "#769656" : "white"}}>
                    
                  </div>
                )
              })
            }
          </div>
        )
      })}
    </div>
  );
}

export default App;
