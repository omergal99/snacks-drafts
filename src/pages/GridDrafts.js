import React, { useEffect } from "react";

function GridDrafts() {

  useEffect(() => {

  }, [])

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const list = arr.map((item, idx) => {
    return <div key={idx} className="item">
      <span>Box-{item}</span>
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