import React, { useState } from "react";

function Table() {
  document.title = "Table";

  const [counters, setCounters] = useState([0, 1, 2, 3, 4, 5]);

  const addOne = (idx) => {
    // console.log(ev.target.mycustomattribute, idx);
    // console.log(ev.target.getAttribute('mycustomattribute'));
    // let editCounters = JSON.parse(JSON.stringify(counters));
    let editCounters = [...counters];
    editCounters[idx]++;
    setCounters(editCounters);
  }

  const table = counters.map((number, idx) => {
    return <div mycustomattribute={idx} key={idx} onClick={() => addOne(idx)}>
      {number}
    </div>
  })

  return (
    <div className="table">
      {table}
    </div>
  );
}

export default React.memo(Table);