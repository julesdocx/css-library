import React from "react";
import "./_grid.css";

function Grid() {
  return (
    <div className="span-12x1">
      <h2 className="font-36 c-white bg-grey p-4">Grid</h2>{" "}
      <div className="grid-4 md-grid gap-4 resize-container mb-12 mt-12">
        <p className="font-20 p-16 grid-padding bg-grey">span-1x1</p>
        <p className="font-20 p-16 grey-3 grid-padding span-1x2">span-1x2</p>
        <p className="font-20 p-16 grid-padding bg-grey">span-1x1</p>
        <p className="font-20 p-16 grid-padding bg-light-grey">span-1x1</p>
        <p className="font-20 p-16 grid-padding bg-light-grey">span-1x1</p>
        <p className="font-20 p-16 grey-4 grid-padding bg-light-grey span-2x1">
          span-2x1
        </p>
      </div>
      <div className="md-grid grid-2 gap-4">
        <h5 className="text-grey">display: grid, until 720px</h5>
        <p>md-grid</p>
        <h5 className="text-grey">display: grid, until 960px</h5>
        <p>lg-grid</p>
        <h5 className="text-grey">maximum grid columns</h5>
        <p>12</p>
        <h5 className="text-grey">maximum grid rows</h5>
        <p>♾</p>
        <h5 className="text-grey">grid-4</h5>
        <div className="md-grid grid-4">
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
          <div className="bg-blue"></div>
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
          <div className="bg-grey"></div>
        </div>
        <h5 className="text-grey">grid-6</h5>
        <div className="md-grid grid-6">
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
          <div className="bg-blue"></div>
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
          <div className="bg-grey"></div>
        </div>
        <h5 className="text-grey">gap-12</h5>
        <div className="md-grid grid-4 gap-6">
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
          <div className="bg-grey"></div>
          <div className="bg-blue"></div>
        </div>
        <h5 className="text-grey">span-1x2</h5>
        <div className="md-grid grid-4">
          <div className="bg-grey">.</div>
          <div className="bg-red span-1x2">span-1x2</div>
          <div className="bg-grey">.</div>
          <div className="bg-blue">.</div>
          <div className="bg-blue">.</div>
          <div className="bg-grey">.</div>
          <div className="bg-blue ">span-1x2</div>
        </div>
        <h5 className="text-grey">span-2x2</h5>
        <div className="md-grid grid-4">
          <div className="bg-grey">.</div>
          <div className="bg-red span-2x2">span-2x2</div>
          <div className="bg-grey">.</div>
          <div className="bg-blue">.</div>
          <div className="bg-blue">.</div>
        </div>
        <h5 className="text-grey">span-4x1</h5>
        <div className="md-grid grid-4">
          <div className="bg-red span-4x1">span-4x1</div>
          <div className="bg-grey">.</div>
          <div className="bg-blue">.</div>
          <div className="bg-grey">.</div>
          <div className="bg-blue">.</div>
          <div className="bg-blue">.</div>
          <div className="bg-grey">.</div>
          <div className="bg-blue">.</div>
          <div className="bg-grey">.</div>
        </div>
      </div>
    </div>
  );
}

export default Grid;
