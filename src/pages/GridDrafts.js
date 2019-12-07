import React, { useEffect } from "react";

import TodoList from '../cmps/TodoList';
import TodoDetails from '../cmps/TodoDetails';

function GridDrafts() {

  useEffect(() => {

  }, [])

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const list = arr.map((item, idx) => {
    return <div key={idx} className="item">
      {item !== 1 && item !== 6 &&
        <span style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}>Box-{item}</span>
      }
      {item === 1 &&
        <TodoList />
      }
      {item === 6 &&
        <TodoDetails />
      }
      {item === 3 &&
        <>
          <svg style={{ top: '135px', left: '150px', height: '310px', width: '223px', filter: 'drop-shadow( 3px -3px 3px #30ff1f)' }}>
            <line y1="210" y2="40" x1="30" x2="198" style={{ stroke: '#48ff92' }}></line>
          </svg>
        </>
      }
      {item === 4 &&
        <>
          <div className="div-line"
            style={{
              height: '1px', background: 'rgb(98, 255, 162)', borderRadius: '4px',
              boxShadow: '0px 0px 0 #40ff22, 0px 0px 4px #30ff1f, 0px 0px 8px #20ff1b, 0px 0px 16px #10ff18',
              top: '143px', position: 'relative', transform: 'rotate(-48deg)'
            }}>
          </div>
          <div className="div-line"
            style={{
              height: '1px', background: 'rgb(98, 255, 162)', borderRadius: '4px',
              boxShadow: '0px 0px 0 #40ff22, 0px 0px 4px #30ff1f, 0px 0px 8px #20ff1b, 0px 0px 16px #10ff18',
            }}>
          </div>
        </>
      }
    </div>
  })

  return (
    <div className="GridDrafts">
      <h2>Grid Layout</h2>
      <div className="list">
        {list}
      </div>
    </div >
  );
}

export default React.memo(GridDrafts);