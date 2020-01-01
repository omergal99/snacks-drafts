import React from "react";
// import { useEffect } from "react";
import devices from '../../assets/img/tryImport/phone.png';

function ImportImgs() {

  // useEffect(() => {
  // }, [])

  return (
    <div className="ImportImgs">
      <span>ImportImgs</span>
      <img src={devices} alt=""/>
    </div>
  );
}

export default React.memo(ImportImgs);