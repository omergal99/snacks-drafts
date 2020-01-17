import React, { useState } from "react";

function ApproveScreen() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="ApproveScreen">
      <span style={{ top: '8px', position: 'relative' }}>ApproveScreen</span>

      <div className="ui-border-v2 t"
        style={{
          position: 'absolute', top: '36px', left: '50%',
          transform: 'translate(-50%, 0)', width: '620px', height: '30px', zIndex: 1, fill: '#59b29e', opacity: 1
        }}>
        <svg viewBox="0 0 620 30"
          style={{ fill: '#51d4ff', filter: 'drop-shadow( 0 0 3px #40c1ff)' }}>
          <g id="ui-border-v2">
            <path d="M628.587,25.19l-7.963-13.811h-0.008L617.525,6.03A12.244,12.244,0,0,0,607.74.994H409.994V0h198.43c4.149,0,8.2,2.1,9.748,4.781l2.949,5.089h0.028l8.086,14.062A12.237,12.237,0,0,0,639.03,29h80.976v0.006h77.735a12.243,12.243,0,0,0,9.784-5.037l3.091-5.348h0.008l7.963-13.811C820.142,2.113,824.192,0,828.345,0H1029.99V1H829.029a12.237,12.237,0,0,0-9.794,5.068L811.15,20.131h-0.029l-2.948,5.089C806.618,27.9,802.573,30,798.424,30H638.345C634.192,30,630.142,27.887,628.587,25.19Z" transform="translate(-410)"></path>
          </g>
        </svg>
        <div className="batt"
          style={{ opacity: 1, width: '12px', height: '3px', position: 'absolute', left: '50%', bottom: '-1px', transform: 'translate(-50%, 0)', background: '#f63b4c' }}>
        </div>
      </div>

      <button style={{ top: '85px', position: 'absolute' }} onClick={toggleOpen}>Toggle</button>

      {isOpen &&
        <div className="first-screen-container">
          <div className="wrap-content">
            <span className="span-assist"></span>
            <div className="content">
              <br />
              <br />
              <br />
              <h2>Are you sure?</h2>
              <br />
              <br />
              <br />
              <p>This action is complex and has implications.</p>
              <p>The details will not be editable after approval.</p>
              <br />
              <br />
              <br />
              <button>Approve</button>
              <button>Cencel</button>
            </div>
          </div>
        </div>
      }

    </div >
  );
}

export default React.memo(ApproveScreen);