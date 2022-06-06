import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";


export default function Buttons() {
const [isCopied1, setIsCopied1] = useState(false);
const [isCopied2, setIsCopied2] = useState(false);

const [tabState1, setTabState1] = useState(0);
const [tabState2, setTabState2] = useState(0);


const copyText_1 = `<a href="#" className="btn hover-underline text-blue">
 Link
</a>`;
const copyText_2 = `<button className="btn hover-underline text-blue">
  Button
</button>`;
const copyText_3 = `<input type="submit" className="btn hover-underline text-blue"></input>`;
const copyText_4 = `<input type="reset" className="btn hover-underline text-blue"></input>`;

const copyText_5 = `<button className="btn hover-underline text-green mb-6 mr-6">
  Button
</button>
<button className="btn-secondary bg-green hover-rounded hover-green text-white mb-6 mr-6">
  Button
</button>
<button className="btn-green bg-green hover-white text-white text-hover-green mb-6 mr-6">
  Button
</button>
<button className="btn-outlined-green text-green text-hover-white hover-green mb-6 mr-6">
  Button
</button>
<button className="btn-underlined text-green mb-6 mr-6">
  Button
</button>`;
const copyText_6 = `<button className="btn hover-underline text-yellow mb-6 mr-6">
  Button
</button>
<button className="btn-secondary bg-yellow hover-rounded hover-yellow text-white mb-6 mr-6">
  Button
</button>
<button className="btn-yellow bg-yellow hover-white text-white text-hover-yellow mb-6 mr-6">
  Button
</button>
<button className="btn-outlined-yellow text-yellow text-hover-white hover-yellow mb-6 mr-6">
  Button
</button>
<button className="btn-underlined text-yellow mb-6 mr-6">
  Button
</button>`;
const copyText_7 = `<button className="btn hover-underline text-red mb-6 mr-6">
  Button
</button>
<button className="btn-secondary bg-red hover-rounded hover-red text-white mb-6 mr-6">
  Button
</button>
<button className="btn-red bg-red hover-white text-white text-hover-red mb-6 mr-6">
  Button
</button>
<button className="btn-outlined text-red text-hover-white hover-red mb-6 mr-6">
  Button
</button>
<button className="btn-underlined text-red mb-6 mr-6">
  Button
</button>`;

  return (
    <div className="span-12x1">
      {/* <div className="grid-3 mb-2 gap-6 tab-group pt-1">
        <a href="" className="active-tab tab-item font-14 hover-underline">
          Development
        </a>
        <a href="" className="tab-item font-14 hover-bg-grey hover-underline">
          Design
        </a>
        <a href="" className="tab-item font-14 hover-bg-grey hover-underline">
          References
        </a>
      </div> */}
      <h2 className="font-30 c-grey">Button</h2>
      <div className="p-2 c-grey code-description grid-2 md-grid">
        <div>
          A button is an&nbsp;
          <ul>
            <li>
              <span>
                <code>{`<a><a/>`}</code>
              </span>
              ,&nbsp;
            </li>
            <li>
              <span>
                <code>{`<button></button>`}</code>
              </span>
              ,&nbsp;
            </li>
            <li>
              <span>
                <code>{`<input type="submit"></input>`}</code>
              </span>
              &nbsp;or&nbsp;
            </li>
            <li>
              <span>
                <code>{`<input type="clear"></input>`}</code>
              </span>
            </li>
          </ul>
          tag with the&nbsp;
          <span>
            <code>{`"btn"`}</code>
          </span>
          &nbsp;class.
        </div>
        <div>
          The default&nbsp;
          <span>
            <code>{`"btn"`}</code>
          </span>
          &nbsp;has a font-size of 16px in bold style. The example below also
          has the&nbsp;
          <span>
            <code>"hover-underline"</code>
          </span>
          &nbsp;and&nbsp;
          <span>
            <code>"text-blue"</code>
          </span>
          &nbsp;class
        </div>
      </div>
      <div className="span-2x1 mt-24 code-block">
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
        <SyntaxHighlighter
          className="brd-sm"
          id="button"
          language="html"
          style={vscDarkPlus}
        >
          {tabState1 === 0
            ? copyText_1
            : tabState1 === 1
            ? copyText_2
            : tabState1 === 2
            ? copyText_3
            : tabState1 === 3
            ? copyText_4
            : ""}
        </SyntaxHighlighter>
      </div>
      <div
        className="span output-example border-light-grey"
        dangerouslySetInnerHTML={
          tabState1 === 0
            ? { __html: copyText_1 }
            : tabState1 === 1
            ? { __html: copyText_2 }
            : tabState1 === 2
            ? { __html: copyText_3 }
            : tabState1 === 3
            ? { __html: copyText_4 }
            : ""
        }
      ></div>
      <h2 className="font-30 mt-24 c-grey">Button colors &amp; hovers</h2>
      <div className="span-2x1 code-block">
        <div className="p-2 c-grey code-description">
          Buttons can be colored &nbsp;
          <ul>
            <li>
              <span>
                <code>{`<a><a/>`}</code>
              </span>
              ,&nbsp;
            </li>
            <li>
              <span>
                <code>{`<button></button>`}</code>
              </span>
              ,&nbsp;
            </li>
            <li>
              <span>
                <code>{`<input type="submit"></input>`}</code>
              </span>
              &nbsp;or&nbsp;
            </li>
            <li>
              <span>
                <code>{`<input type="clear"></input>`}</code>
              </span>
            </li>
          </ul>
          &nbsp;tag with the&nbsp;
          <span>
            <code>{`"btn"`}</code>
          </span>
          &nbsp;class. The default&nbsp;
          <span>
            <code>{`"btn"`}</code>
          </span>
          &nbsp;has a font-size of 16px in bold style. This example also has
          the&nbsp;
          <span>
            <code>"hover-underline"</code>
          </span>
          &nbsp;and&nbsp;
          <span>
            <code>"text-blue"</code>
          </span>
          &nbsp;class
        </div>
        <div className="grid-4 md-grid mb-2 gap-6 tab-group pt-1">
          <button
            onClick={() => setTabState2(0)}
            className={`tab-item ${
              tabState2 === 0 ? "span-2x1 font-bold active-tab" : " span-1x1"
            } font-14 hover-grey hover-underline`}
          >
            Green
          </button>
          <button
            onClick={() => setTabState2(1)}
            className={`tab-item ${
              tabState2 === 1 ? "span-2x1 font-bold active-tab" : " span-1x1"
            } font-14 hover-grey hover-underline`}
          >
            Yellow
          </button>
          <button
            onClick={() => setTabState2(2)}
            className={`tab-item ${
              tabState2 === 2 ? "span-2x1 font-bold active-tab" : " span-1x1"
            } font-14 hover-grey hover-underline`}
          >
            Red
          </button>
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
          {tabState2 === 0
            ? copyText_5
            : tabState2 === 1
            ? copyText_6
            : tabState2 === 2
            ? copyText_7
            : ""}
        </SyntaxHighlighter>
      </div>
        <div
          className="mt-12 output-example border-light-grey"
          dangerouslySetInnerHTML={
            tabState2 === 0
              ? { __html: copyText_5 }
              : tabState2 === 1
              ? { __html: copyText_6 }
              : tabState2 === 2
              ? { __html: copyText_7 }
              : ""
          }
        ></div>
        <div className="content-footer display-f justify-c-e align-i-c">
            <div className="">
                <Link
                to="/documentation/typography"
                className="btn-underlined text-blue"
                >
                    Typography ={'>'}
                </Link>
                <p className="font-12 align-r">
                Guiding you through the Typography system.
                </p>
              </div>
        </div>
    </div>
  );
}

