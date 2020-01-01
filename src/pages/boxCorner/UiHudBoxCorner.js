import React, { useEffect } from "react";

function UiHudBoxCorner() {

  useEffect(() => {

  }, [])

  return (
    <div className="UiHudBoxCorner">
      <span>UiHudBoxCorner</span>

      <div className="rect"></div>
      <div className="rainbow">
        Rainbow border
      </div>

      <div className="span-asist">
        <span></span>
      </div>
    </div >
  );
}

export default React.memo(UiHudBoxCorner);