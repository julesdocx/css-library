import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./gettingstarted.css";

function GettingStarted() {
  const [navState, setNavState] = useState(0);

  return (
    <div className="grid-10 md-grid mt-60">
      <div className="span-10x1 gs-accordeon">
        <button className={`gs-step hover-mover vscode-step`} id="">
          <div className="display-f step-title">
            <img
              className="gs-step-image"
              src="./Visual_Studio_Code.png"
              alt="vscodelogo"
            />
            <p className="font-24">Install Visual Studio Code</p>
          </div>
          <div className="description">Your first IDE experience</div>
          <svg
            className="step-arrow aside vscode-step"
            fill="#1572B0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
          </svg>
        </button>
        <button className="gs-step" id="html-step">
          <div className="display-f step-title">
            <img
              className="gs-step-image"
              src="./html-bracket.png"
              alt="vscodelogo"
            />
            <p className="font-24">Create index.html with emmet (!)</p>
          </div>
          <div className="description">Your first IDE experience</div>
          <svg
            className="step-arrow aside vscode-step"
            fill="#DC6A11"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
          </svg>
        </button>
        <button className="gs-step" id="styles-step">
          <div className="display-f step-title">
            <img
              className="gs-step-image"
              src="./css_logo.png"
              alt="vscodelogo"
            />
            <p className="font-24">Import &#60;link styles&#62;</p>
          </div>
          <div className="description">Your first IDE experience</div>
          <svg
            className="step-arrow aside vscode-step"
            fill="#1484D0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
          </svg>
        </button>
        <button className="gs-step" id="live-step">
          <div className="display-f step-title">
            <img
              className="gs-step-image"
              src="./liveserver_logo.png"
              alt="vscodelogo"
            />
            <p className="font-24">Install Live Server</p>
          </div>
          <div className="description">Your first IDE experience</div>
          <svg
            className="step-arrow aside vscode-step"
            fill="#7B1FA2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
          </svg>
        </button>
        <button className="gs-step" id="github-step">
          <div className="display-f step-title">
            <img
              className="gs-step-image"
              src="./githublogo.png"
              alt="vscodelogo"
            />
            <p className="font-24">Setup Github</p>
          </div>
          <div className="description">Your first IDE experience</div>
          <svg
            className="step-arrow aside vscode-step"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
          </svg>
        </button>
        <button className="gs-step" id="netlify-step">
          <div className="display-f step-title">
            <img
              className="gs-step-image"
              src="./netlifylogo.svg"
              alt="vscodelogo"
            />
            <p className="font-24">Host on Netlify</p>
          </div>
          <div className="description">Your first IDE experience</div>
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
      <div className="span-8x1 side-nav-content grid-start-3">
        <Outlet />
      </div>
    </div>
  );
}

export default GettingStarted;
  