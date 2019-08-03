import React, { useRef } from 'react';

function PilotSwitch({ isChecked, idx, onHandleChanged }) {

  const checkInput = useRef(null);

  const switchOn = new Audio("assets/sounds/pilot/switch on.mp3");
  const switchOff = new Audio("assets/sounds/pilot/switch off.mp3");
  switchOn.volume = 0.5;
  switchOff.volume = 0.7;

  const handleChanged = (ev) => {
    (ev.target.checked) ? switchOn.play() : switchOff.play();
  }
  const handleTouch = (ev) => {
    // console.log('aasasasas')
    // console.log(ev.target)
    // console.log(checkInput.current)
    (!checkInput.current.checked) ? switchOn.play() : switchOff.play();
    // if(checkInput.current.checked){
    //   console.log(checkInput.current)
    //   switchOn.play()
    // }else{
    //   console.log(checkInput.current)
    //   console.log(7777)
    //   switchOff.play()
    // }
  }

  return (
    <div className="pilot-switch">
      <span className="switch">
        <span className="switch-border1">
          <span className="switch-border2">
            <input id={`switch${idx}`} ref={checkInput}
              // onClick={handleChanged.bind(this)}
              type="checkbox" defaultChecked={isChecked} />
            <label htmlFor={`switch${idx}`}
              onTouchStart={handleTouch.bind(this)}
            ></label>
            <span className="switch-top"></span>
            <span className="switch-shadow"></span>
            <span className="switch-handle"></span>
            <span className="switch-handle-left"></span>
            <span className="switch-handle-right"></span>
            <span className="switch-handle-top"></span>
            <span className="switch-handle-bottom"></span>
            <span className="switch-handle-base"></span>
            <span className="switch-led switch-led-green">
              <span className="switch-led-border">
                <span className="switch-led-light">
                  <span className="switch-led-glow"></span>
                </span>
              </span>
            </span>
            <span className="switch-led switch-led-red">
              <span className="switch-led-border">
                <span className="switch-led-light">
                  <span className="switch-led-glow"></span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default React.memo(PilotSwitch)



