import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";

export default function Typography() {
const [isCopied1, setIsCopied1] = useState(false);
const [isCopied2, setIsCopied2] = useState(false);

const [tabState1, setTabState1] = useState(0);
const [tabState2, setTabState2] = useState(0);

const copyText_1 = `<p class="font-12">Hello world in font-size: 1rem * 0.75 / 12px</p>`;
const copyText_2 = `<p class="font-18">Hello world in font-size: 1rem * 1.125 / 18px</p>`;
const copyText_3 = `<p class="font-24">Hello world in font-size: 1rem * 1.5 / 24px</p>`;
const copyText_4 = `<p class="font-48">Hello world in font-size: 1rem * 3 / 48px</p>`;

const copyText_5 = `<p class="font-bold">Hello world in font-weight: 800</p>`;
const copyText_6 = `<p class="font-thin ">Hello world in font-weight: 100</p>`;
const copyText_7 = `<p class="style-italic">Hello world in font-style: italic</p>`;
const copyText_8 = `<p class="text-underline">Hello world with text-decoration: underline</p>`;


  return (
    <div className="span-12x1">
      <h2 className="font-36 c-white bg-grey p-4">Typography</h2>{" "}
      <div className="grid-5 md-grid mb-2 gap-6 tab-group pt-1 mt-12">
        <button
          onClick={() => setTabState1(0)}
          className={`tab-item ${
            tabState1 === 0 ? "span-2x1 font-bold active-tab" : " span-x1"
          } font-14 hover-grey hover-underline`}
        >
          Small text
        </button>
        <button
          onClick={() => setTabState1(1)}
          className={`tab-item ${
            tabState1 === 1 ? "span-2x1 font-bold active-tab" : " span-1x1"
          } font-14 hover-grey hover-underline`}
        >
          Large body
        </button>
        <button
          onClick={() => setTabState1(2)}
          className={`tab-item ${
            tabState1 === 2 ? "span-2x1 font-bold active-tab" : " span-1x1"
          } font-14 hover-grey hover-underline`}
        >
          Title
        </button>
        <button
          onClick={() => setTabState1(3)}
          className={`tab-item ${
            tabState1 === 3 ? "span-2x1 font-bold active-tab" : " span-1x1"
          } font-14 hover-grey hover-underline`}
        >
          Headline 1
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
      <div className="p-2 c-grey code-description">
        <div>
          Every font-size has it's own class &nbsp;
          <span>
            <code>{`.font-12`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`font-16`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-18`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-20`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-24`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-36`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-48`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-60`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-96`}</code>
          </span>
          ,&nbsp;
        </div>
      </div>
      <div className="grid-5 md-grid mb-2 gap-6 tab-group pt-1 mt-12">
        <button
          onClick={() => setTabState2(0)}
          className={`tab-item ${
            tabState2 === 0 ? "span-2x1 font-bold active-tab" : " span-x1"
          } font-14 hover-grey hover-underline`}
        >
          Bold
        </button>
        <button
          onClick={() => setTabState2(1)}
          className={`tab-item ${
            tabState2 === 1 ? "span-2x1 font-bold active-tab" : " span-1x1"
          } font-14 hover-grey hover-underline`}
        >
        Thin
        </button>
        <button
          onClick={() => setTabState2(2)}
          className={`tab-item ${
            tabState2 === 2 ? "span-2x1 font-bold active-tab" : " span-1x1"
          } font-14 hover-grey hover-underline`}
        >
          Italic
        </button>
        <button
          onClick={() => setTabState2(3)}
          className={`tab-item ${
            tabState2 === 3 ? "span-2x1 font-bold active-tab" : " span-1x1"
          } font-14 hover-grey hover-underline`}
        >
          Underlined
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
          : tabState2 === 3
          ? copyText_8
          : ""}
      </SyntaxHighlighter>
      <div
        className="mt-12 output-example border-light-grey"
        dangerouslySetInnerHTML={
          tabState2 === 0
            ? { __html: copyText_5 }
            : tabState2 === 1
            ? { __html: copyText_6 }
            : tabState2 === 2
            ? { __html: copyText_7 }
            : tabState2 === 3
            ? { __html: copyText_8 }
            : ""
        }
      ></div>
      <div className="p-2 c-grey code-description">
        <div>
          Every font property has it's own class &nbsp;
          <span>
            <code>{`.font-thin`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`font-light`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-medium`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-bold`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.font-black`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.style-italic`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.style-oblique`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.text-underline`}</code>
          </span>
          ,&nbsp;
          <span>
            <code>{`.spacing--025`}</code>
          </span>
          ,&nbsp;
        </div>
      </div>
      {/* <div className="span-12x1">
        <div className="grid-2 mt-16">
          <div className="grid-padding grid-border display-f content-sb font-8">
            CAPTION<span className="align-r font-8">8px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-12">
            Small text <span className="align-r font-8">12px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-14">
            Body 2 <span className="align-r font-8">14px</span>
          </div>
          <div className="span-1x2 grid-padding grid-border display-f content-sb font-16">
            Body <span className="align-r font-8">16px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-body font-16">
            button <span className="align-r font-8">16px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-body font-18">
            budy medium <span className="align-r font-8">18px</span>
          </div>
          <div className="grid-padding grid-border display-f content-sb font-20">
            Subheading <span className="align-r font-8">20px</span>
          </div>
          <div className="span-1x1 grid-padding grid-border display-f content-sb font-24">
            Title <span className="align-r font-8">24px</span>
          </div>
          <div className="span-1x1 grid-padding grid-border display-f content-sb font-32">
            Headline <span className="align-r font-8">32px</span>
          </div>
          <div className="span-1x1 grid-padding grid-border display-f content-sb font-36">
            Headline 2<span className="align-r font-8">36px</span>
          </div>
          <div className="span-1x1 grid-padding grid-border display-f content-sb font-48">
            Display-1 <span className="align-r font-8">48px</span>
          </div>
          <div className="span-2x1 grid-padding grid-border display-f content-sb font-60">
            Display-2 <span className="align-r font-8">60px</span>
          </div>
          <div className="span-2x1 spacing-xs font-bold grid-padding grid-border display-f reverse content-sb font-96">
            Display-3{" "}
            <span className="align-r spacing font-regular font-8">96px</span>
          </div>
        </div>
      </div>
      <div className="grid-3 span-12x1">
        <div className="grid-padding grid-border font-thin font-body">thin</div>
        <div className="grid-padding grid-border font-thin style-italic font-body">
          thin italic
        </div>
        <div className="grid-padding grid-border font-light font-body">
          light
        </div>
        <div className="grid-padding grid-border font-light style-italic font-body">
          light italic
        </div>
        <div className="grid-padding grid-border font-regular font-body">
          regular
        </div>
        <div className="grid-padding grid-border font-medium font-body">
          medium
        </div>
        <div className="grid-padding grid-border font-bold font-body">bold</div>
        <div className="grid-padding grid-border font-black font-body">
          black
        </div>
      </div>
      <div className="grid-3 span-12x1">
        <div className="grid-padding spacing-xs grid-border font-bold font-body">
          Extra small
        </div>
        <div className="grid-padding spacing-s grid-border font-bold font-body">
          Small
        </div>
        <div className="grid-padding spacing-default grid-border font-bold font-body">
          Default
        </div>
        <div className="grid-padding grid-border spacing-l font-bold font-body">
          Large
        </div>
      </div>
      <div className="grid-3 span-12x1">
        <div className="grid-padding opacity-10 grid-border font-bold font-body">
          Opacity10
        </div>
        <div className="grid-padding opacity-20 grid-border font-bold font-body">
          Opacity20
        </div>
        <div className="grid-padding opacity-30 grid-border font-bold font-body">
          Opacity30
        </div>
        <div className="grid-padding opacity-40 grid-border font-bold font-body">
          Opacity40
        </div>
        <div className="grid-padding opacity-50 grid-border font-bold font-body">
          Opacity50
        </div>
        <div className="grid-padding opacity-60 grid-border font-bold font-body">
          Opacity60
        </div>
        <div className="grid-padding opacity-70 grid-border font-bold font-body">
          Opacity70
        </div>
        <div className="grid-padding opacity-80 grid-border font-bold font-body">
          Opacity80
        </div>
        <div className="grid-padding opacity-90 grid-border font-bold font-body">
          Opacity90
        </div>
        <div className="grid-padding opacity-100 grid-border font-bold font-body">
          Opacity100 / default
        </div>
      </div> */}
    </div>
  );
}
