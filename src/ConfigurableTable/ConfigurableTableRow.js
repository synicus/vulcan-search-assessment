import React from 'react'

export default ( {rowData} ) => (
  <div className="cfg-table-row">
    {rowData.map( (cellData, i) => (
      <div className={i === 0 ? "cfg-table-cell cfg-table-cell-axis" : "cfg-table-cell"} key={i}>{cellData}</div>
    ))}
  </div>
)