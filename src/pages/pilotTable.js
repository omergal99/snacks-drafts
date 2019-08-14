// import React, { useEffect } from 'react';
import React, { useRef, useEffect, useState } from "react";


import PilotSwitch from '../cmps/PilotSwitch';

function PilotTable() {
  const counts = [true, true, false];

  const [h1Text, setH1Text] = useState('Hello CodeSandbox');

  useEffect(() => {
    document.title = "Pilot Table";
  });

  // const switchOn = new Audio("assets/sounds/pilot/switch on.mp3");
  // const switchOff = new Audio("assets/sounds/pilot/switch off.mp3");

  const onSwitchChanged = (ev) => {
    // (ev.target.checked) ? switchOn.play() : switchOff.play();
  }

  const table = counts.map((count, idx) => {
    return <div key={idx}>
      <PilotSwitch isChecked={count} idx={idx} onHandleChanged={onSwitchChanged.bind(this)} />
    </div>
  })

  return (
    <div className="pilot-table">
      {table}
    </div>
  );
}

export default React.memo(PilotTable)