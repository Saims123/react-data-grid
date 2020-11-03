import React, { useMemo } from 'react';
import * as ReactDOM from 'react-dom';
import DataGrid from './lib/index.js';

const rows = Array(1000);

function CellFormatter(props) {
  return `${props.column.key}x${props.rowIdx}`;
}

function MillionCells() {
  const columns = useMemo(() => {
    const columns = [];

    for (let i = 0; i < 1000; i++) {
      const key = String(i);
      columns.push({
        key,
        name: key,
        frozen: i < 5,
        resizable: true,
        formatter: CellFormatter
      });
    }

    return columns;
  }, []);

  return React.createElement(DataGrid, {
    columns,
    rows,
    rowHeight: 22,
    className: "fill-grid"
  });
}

console.log(ReactDOM)
ReactDOM
  .unstable_createRoot(document.getElementById('root'))
  .render(React.createElement(MillionCells));
