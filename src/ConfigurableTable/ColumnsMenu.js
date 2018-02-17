import React from 'react'

export default ({ ColumnHeaders, isColVisible, handleColumnMenuClick }) => (
  <div className="columns-menu">
    {ColumnHeaders.map( (header, i) => (
        <div className = {i === 0 ? "columns-menu-item columns-menu-item-first" : "columns-menu-item"} key={i}>
          <div className={isColVisible[i] ? 'chk-container checked' : 'chk-container'} onClick={() => handleColumnMenuClick(i)}>
            <span className="check">✔</span>
          </div>
          {header}
        </div>
    ))}
  </div>
)