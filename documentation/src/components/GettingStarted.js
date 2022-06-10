import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./gettingstarted.css";

function GettingStarted() {
  const [navState, setNavState] = useState(0);

  return (
    <div className="grid-10 md-grid mt-60">
      <div className="mt-24 span-10x1 align-c">
        <img className="banner" src="./Asset 4.svg" alt="Six hand made steps" />
      </div>
      <p className="span-3x1 grid-start-8 subtitle font-24 font-bold text-grey">
        A handmade website upon completion
      </p>

      <div className="span-10x1 gs-accordeon mb-36">
        <div className="md-grid grid-10 step-list text-grey align-c-c">
          <div className="span-4x1 grid-start-4">
            <div className="display">
              <p className="vscode-step">1. Install Visual Studio Code </p>
            </div>
            <p className="html-step">2. Create index.html with emmet (!) </p>
            <p className="styles-step">3. Import &#60;link styles&#62;</p>
            <p className="live-step">4. Install Live Server </p>
            <p className="github-step">5. Setup Github </p>
            <p className="netlify-step">6. Host on Netlify </p>
          </div>
        </div>
        <div className="grid-12 md-grid">
          <button className={`gs-step hover-mover vscode-step span-2x1`} id="">
            <div className="display-f step-title">
              <p className="font-36 mr-12 font-bold">1.</p>
              <img
                className="gs-step-image"
                src="./Visual_Studio_Code.png"
                alt="vscodelogo"
              />
              {/* <p className="font-24">Install Visual Studio Code</p> */}
            </div>
            {/* <div className="description">Your first IDE experience</div> */}
            <svg
              className="step-arrow aside vscode-step"
              fill="#1572B0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
            </svg>
          </button>
        </div>
        <div className="grid-12 md-grid .html-step">
          <button className="gs-step span-4x1 html-step" id="html-step">
            <div className="display-f step-title">
              <p className="font-36 mr-12 font-bold .html-step">2.</p>
              <img
                className="gs-step-image"
                src="./html-bracket.png"
                alt="vscodelogo"
              />
              {/* <p className="font-24">Create index.html with emmet (!)</p> */}
            </div>
            {/* <div className="description">Your first IDE experience</div> */}
            <svg
              className="step-arrow aside vscode-step"
              fill="#DC6A11"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
            </svg>
          </button>
        </div>
        <div className="grid-12 md-grid">
          <button className="gs-step span-6x1 styles-step" id="styles-step">
            <div className="display-f step-title">
              <p className="font-36 mr-12 font-bold">3.</p>
              <img
                className="gs-step-image"
                src="./css_logo.png"
                alt="vscodelogo"
              />
              {/* <p className="font-24">Import &#60;link styles&#62;</p> */}
            </div>
            {/* <div className="description">Your first IDE experience</div> */}
            <svg
              className="step-arrow aside vscode-step"
              fill="#1484D0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
            </svg>
          </button>
        </div>
        <div className="grid-12 md-grid">
          <button className="gs-step span-8x1 live-step" id="live-step">
            <div className="display-f step-title">
              <p className="font-36 mr-12 font-bold">4.</p>
              <img
                className="gs-step-image"
                src="./liveserver_logo.png"
                alt="vscodelogo"
              />
              {/* <p className="font-24">Install Live Server</p> */}
            </div>
            {/* <div className="description">Your first IDE experience</div> */}
            <svg
              className="step-arrow aside vscode-step"
              fill="#7B1FA2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
            </svg>
          </button>
        </div>
        <div className="grid-12 md-grid">
          <button className="gs-step span-10x1 github-step" id="github-step">
            <div className="display-f step-title">
              <p className="font-36 mr-12 font-bold">5.</p>
              <img
                className="gs-step-image"
                src="./githublogo.png"
                alt="vscodelogo"
              />
              {/* <p className="font-24">Setup Github</p> */}
            </div>
            {/* <div className="description">Your first IDE experience</div> */}
            <svg
              className="step-arrow aside vscode-step"
              fill="#000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
            </svg>
          </button>
        </div>
        <div className="grid-12 md-grid">
          <button className="gs-step span-12x1 netlify-step" id="netlify-step">
            <div className="display-f step-title">
              <p className="font-36 mr-12 font-bold">6.</p>
              <img
                className="gs-step-image"
                src="./netlifylogo.svg"
                alt="vscodelogo"
              />
              {/* <p className="font-24">Host on Netlify</p> */}
            </div>
            {/* <div className="description">Your first IDE experience</div> */}
            <svg
              className="step-arrow aside vscode-step"
              fill="#25C7B7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="span-8x1 side-nav-content grid-start-3">
        <Outlet />
      </div>
    </div>
  );
}

export default GettingStarted;
  