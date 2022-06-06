import React, { useState } from "react";

function Tabs() {
const [tabState1, setTabState1] = useState(0)

  return (
    <div className="span-12x1">
      <h1 className="font-96 opacity-50 spacing-sm">Tabs</h1>
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
      </div>
    </div>
  );
}

export default Tabs;
