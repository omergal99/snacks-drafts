// import React, { useRef, useEffect, useState } from "react";
import React, { useState } from "react";
// import ReactDOM from "react-dom";

function Example2() {
  const [h1Text, setH1Text] = useState('Hello CodeSandbox');

   const changeHeader = (ev) =>{
    setH1Text(ev.target.value);
   }

  return (
    <div className="App">
      <h1>{h1Text}</h1>
      <input onChange={changeHeader} name="test" />
    </div>
  );
}

export default React.memo(Example2);
