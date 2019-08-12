import React, { useState } from "react";

function Example() {

  const [counters, setCounters] = useState([0, 1, 2, 3, 4, 5]);

  const table = counters.map((number, idx) => {
    return <div mycustomattribute={idx} key={idx} onClick={ev => addOne(ev, idx)}>
      {number}
    </div>
  })

  const addOne = (ev, idx) => {
    // console.log(ev.target.mycustomattribute, idx);
    // console.log(ev.target.getAttribute('mycustomattribute'));
    let editCounters = JSON.parse(JSON.stringify(counters));
    editCounters[idx]++;
    setCounters(editCounters);
  }

  return (
    <div className="example">
      {table}
    </div>
  );
}

export default React.memo(Example);