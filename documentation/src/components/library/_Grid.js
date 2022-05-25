import React from "react";
import "./_grid.css";

function Grid() {
  return (
    <div className="span-12x1">
      <h1 className="font-96 opacity-50 spacing-sm">Grid</h1>
      <div className="grid-4 md-grid gap-4 resize-container">
        <p className="font-20 p-16 grid-padding bg-grey">span-1x1</p>
        <p className="font-20 p-16 grey-3 grid-padding span-1x2">span-1x2</p>
        <p className="font-20 p-16 grid-padding bg-grey">span-1x1</p>
        <p className="font-20 p-16 grid-padding bg-light-grey">span-1x1</p>
        <p className="font-20 p-16 grid-padding bg-light-grey">span-1x1</p>
        <p className="font-20 p-16 grey-4 grid-padding bg-light-grey span-2x1">span-2x1</p>
      </div>
    </div>
  );
}

export default Grid;
