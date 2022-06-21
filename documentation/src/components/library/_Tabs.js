import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";

function Tabs() {

const [isCopied1, setIsCopied1] = useState(false);
const [isCopied2, setIsCopied2] = useState(false);

const [tabState1, setTabState1] = useState(0);
const [tabState2, setTabState2] = useState(0);


const copyText_1 = `<a href="#" class="btn hover-underline text-blue">
 Link
</a>`;
const copyText_2 = `<button class="btn hover-underline text-blue">
  Button
</button>`;
const copyText_3 = `<input type="submit" class="btn hover-underline text-blue"></input>`;
const copyText_4 = `<input type="reset" class="btn hover-underline text-blue"></input>`;
const copyText_5 = `<div class="grid-2 md-grid tab-group">
  <a class="tab-item font-medium active-tab">
      Tab1
  </a>
  <a class="tab-item font-medium">
      Tab2
  </a>
</div>`;
const copyText_6 = `<div class="grid-5 md-grid tab-group">
  <a class="tab-item font-medium active-tab">
      Tab1
  </a>
  <a class="tab-item font-medium">
      Tab2
  </a>
  <a class="tab-item font-medium">
      Tab3
  </a>
  <a class="tab-item font-medium">
      Tab4
  </a>
  <a class="tab-item font-medium">
      Tab5
  </a>
</div>`;
const copyText_7 = `<div class="grid-10 md-grid tab-group">
  <a class="tab-item font-medium active-tab">
      Tab1
  </a>
  <a class="tab-item font-medium">
      Tab2
  </a>
  <a class="tab-item font-medium">
      Tab3
  </a>
  <a class="tab-item font-medium">
      Tab4
  </a>
  <a class="tab-item font-medium">
      Tab5
  </a>
  <a class="tab-item font-medium">
      Tab6
  </a>
  <a class="tab-item font-medium">
      Tab7
  </a>
  <a class="tab-item font-medium">
      Tab8
  </a>
  <a class="tab-item font-medium">
      Tab9
  </a>
  <a class="tab-item font-medium">
      Tab10
  </a>
</div>`;


  return (
    <div className="span-12x1">
      <h2 className="font-36 c-white bg-grey p-4">Tabs</h2>{" "}
      <div className="grid-7 md-grid mb-2 gap-6 tab-group pt-1 mt-12">
        <button
          onClick={() => setTabState1(0)}
          className={`tab-item ${
            tabState1 === 0 ? "span-3x1 font-bold active-tab" : " span-2x1"
          } font-14 hover-grey hover-underline`}
        >
          2 tabs
        </button>
        <button
          onClick={() => setTabState1(1)}
          className={`tab-item ${
            tabState1 === 1 ? "span-3x1 font-bold active-tab" : " span-2x1"
          } font-14 hover-grey hover-underline`}
        >
          5 tabs
        </button>
        <button
          onClick={() => setTabState1(2)}
          className={`tab-item ${
            tabState1 === 2 ? "span-3x1 font-bold active-tab" : " span-2x1"
          } font-14 hover-grey hover-underline`}
        >
          10 tabs
        </button>
      </div>
      <div className="display-f justify-c-r">
        <div
          onClick={() => {
            setIsCopied1(true);
            navigator.clipboard.writeText(copyText_1);
            let selection = window.getSelection();
            let referenceNode = document.getElementsByTagName("pre")[0];
            selection.selectAllChildren(referenceNode);
            setTimeout(() => {
              setIsCopied1(false);
              selection.removeAllRanges();
            }, 2500);
          }}
          className={`mt-14 copy-btn mr-8 ${
            isCopied1
              ? "btn-outlined-green text-green"
              : "btn-blue bg-blue text-white hover-rounded text-hover-white"
          }`}
        >
          {isCopied1 ? "Copied" : "Copy"}
        </div>
      </div>
      <div className="display-f justify-c-r">
        <div
          onClick={() => {
            setIsCopied2(true);
            navigator.clipboard.writeText(copyText_1);
            let selection = window.getSelection();
            let referenceNode = document.getElementsByTagName("pre")[0];
            selection.selectAllChildren(referenceNode);
            setTimeout(() => {
              setIsCopied2(false);
              selection.removeAllRanges();
            }, 2500);
          }}
          className={`mt-14 copy-btn mr-8 ${
            isCopied2
              ? "btn-outlined-green text-green"
              : "btn-blue bg-blue text-white hover-rounded text-hover-white"
          }`}
        >
          {isCopied2 ? "Copied" : "Copy"}
        </div>
      </div>
      <SyntaxHighlighter
        className="brd-sm"
        id="button"
        language="html"
        style={vscDarkPlus}
      >
        {tabState1 === 0
          ? copyText_5
          : tabState1 === 1
          ? copyText_6
          : tabState1 === 2
          ? copyText_7
          : ""}
      </SyntaxHighlighter>
      <div
        className="mt-12 output-example border-light-grey"
        dangerouslySetInnerHTML={
          tabState1 === 0
            ? { __html: copyText_5 }
            : tabState1 === 1
            ? { __html: copyText_6 }
            : tabState1 === 2
            ? { __html: copyText_7 }
            : ""
        }
      ></div>
      <div className="p-2 c-grey code-description">
        <div>
          A tab exists of the parent element with the class: &nbsp;
          <span>
            <code>{`.tab-group`}</code>
          </span>
          &nbsp; and the number of child elements defined by grid-(number) and{" "}
          <span>
            <code>{`.md-grid`}</code>
          </span>{" "}
          element. Child elements get{" "}
          <span>
            <code>{`.tab-item`}</code>
          </span>
          The active tab is defined by{" "}
          <span>
            <code>{`.active-tab`}</code>
          </span>
        </div>
      </div>
      {/* <div className="span-2x1 mt-24 code-block">
        <div className="grid-5 md-grid mb-2 gap-6 tab-group pt-1">
          <button
            onClick={() => setTabState1(0)}
            className={`tab-item ${
              tabState1 === 0 ? "span-2x1 font-bold active-tab" : " span-x1"
            } font-14 hover-grey hover-underline`}
          >
            HTML link
          </button>
          <button
            onClick={() => setTabState1(1)}
            className={`tab-item ${
              tabState1 === 1 ? "span-2x1 font-bold active-tab" : " span-1x1"
            } font-14 hover-grey hover-underline`}
          >
            Button
          </button>
          <button
            onClick={() => setTabState1(2)}
            className={`tab-item ${
              tabState1 === 2 ? "span-2x1 font-bold active-tab" : " span-1x1"
            } font-14 hover-grey hover-underline`}
          >
            Submit
          </button>
          <button
            onClick={() => setTabState1(3)}
            className={`tab-item ${
              tabState1 === 3 ? "span-2x1 font-bold active-tab" : " span-1x1"
            } font-14 hover-grey hover-underline`}
          >
            Clear
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Tabs;
