import React from "react";
import { useEffect, useState } from "react";

function ElectronLogin() {

  const [confirm, setConfirm] = useState(false);
  const [initOneTime, setInitOneTime] = useState(true);

  // const welcomeAudio = new Audio("assets/sounds/welcomeToAtlantic.mp3");
  // const welcomeAudio = new Audio("assets/sounds/voice1.mp3");
  // const welcomeAudio = new Audio("assets/sounds/voice2.mp3");
  const welcomeAudio = new Audio("assets/sounds/voice3.mp3");

  useEffect(() => {
    const typeAudio = new Audio("assets/sounds/beep-type.mp3");
    const promise = typeAudio.play();
    promise && promise.then(audio => audio.play()).catch(() => { });
  }, [])

  const confirmClicked = () => {
    setConfirm(!confirm);
  }

  useEffect(() => {
    const keyDownHandler = ev => {
      if (ev.keyCode === 32 && initOneTime) { // Space
        welcomeAudio.play();
        setInitOneTime(false);
      }
    }
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, [initOneTime, welcomeAudio]);

  const fakeCode = [
    "ACCESS DENIED",
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: WARP SPEED",
    "Z:> /WARPR/LOCATION/DETECT/ EXECUTE -WARPR SESSION 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning location...",
    "LOCATION FOUND (23.45.23.12.00000000)",
    "LOCATION FOUND (13.66.23.12.00110000)",
    "LOCATION FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "...",
    "...",
    "...",
    "...",
    "WARP.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "SCAN: __ 0001.0000.0554.0550",
    "SCAN: __ 0012.0000.0553.0030",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "SYSTEM STAND BY",
    "BOOTING",
    "USERNAME: ******",
    "PASSWORD: *********",
  ];

  const fakeConsole = fakeCode.map((item, idx) => {
    return <p key={idx}>{item}</p>
  })

  return (
    <div className="ElectronLogin">
      <div className="overlay"></div>
      {!initOneTime &&
        <div className="typewriter">
          <h1 className="welcome-words">&nbsp;Welcome to Electron</h1>
        </div>
      }
      <h1 className="title-electron">ELECTRON</h1>
      <div className="login flex-col">
        <input className="user" type="text" placeholder="System" />
        <input className="code" type="password" placeholder="Code" />
        <button className={`${confirm ? 'confirmed' : ''}`} onClick={confirmClicked}>Enter</button>
        <svg className="svg-triangle" viewBox="0 0 100 100">
          <defs>
            <filter id="luminous">
              {/* <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#00FF91" /> */}
              <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="#275fd480" />
            </filter>
          </defs>
          <path d="M0 8 L100 8 L50 93 Z" style={{ filter: 'url(#luminous)' }} />
        </svg>
      </div>
      <div className="fake-console">
        {fakeConsole}
      </div>
    </div>
  );
}

export default React.memo(ElectronLogin);