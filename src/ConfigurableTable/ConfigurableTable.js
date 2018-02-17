import React, { Component } from 'react'
import './ConfigurableTable.css'
import ConfigurableTableRow from './ConfigurableTableRow.js'
import ColumnsMenu from './ColumnsMenu.js'
import SortArrows from './SortArrows.js'
import { dummyHeaders, dummyRows } from './../dummyData/tableData.js'

class ConfigurableTable extends Component {
  constructor(props) {
    super(props)

    const initColVisible = {}
    for (let i = 0; i < dummyHeaders.length - 1; i++) {
      initColVisible[i] = true;
    }

    this.state = {
      ColumnHeaders: dummyHeaders,
      isColVisible: initColVisible,
      isMenuVisible: false,
      sorted: false,
      Rows: dummyRows,
      SortedBy: '',
      Order: '',
      Query: ''
    }

  }

  componentDidMount() {
    this.filterData()
  }

  handleColumnMenuClick = (i) => {
    const newState = this.state.isColVisible;
    newState[i] = !newState[i]
    this.setState( {isColVisible: newState} )
    this.filterData()
  }

  handleHeaderClick = (i) => {
    
    let newRows

    // if column data is string
    if (!parseFloat(this.state.Rows[0][i])) {
      newRows = this.state.Rows.sort( (a, b) =>  {
            if (a[i] > b[i]) {
              return this.state.sorted ? -1 : 1
            } else if (b[i] > a[i]) {
              return this.state.sorted ? 1 : 1
            }
            return 0
          })

    // if column data is number  
    } else {
      newRows = this.state.Rows.sort( (rowA, rowB) => this.state.sorted 
          ? parseFloat(rowA[i]) - parseFloat(rowB[i])
          : parseFloat(rowB[i]) - parseFloat(rowA[i]))
    }
    
    

    console.log('newRpws',newRows)
    this.setState( {Rows: newRows, sorted: !this.state.sorted})
    console.log('sortedchanged',this.state.sorted)
  }

  handleMenuButtonClick = () => {
    this.setState({isMenuVisible: !this.state.isMenuVisible})
  }

  handleOnChange = e => {
    this.setState({query: e.target.value})
    console.log(e.target.value)
    this.filterDataByQuery(e.target.value)
  }

  filterData = () => {
    const { isColVisible } = this.state;
    const newHeaders = dummyHeaders.filter( (header, i) => (
      i === 0 ? true : isColVisible[i - 1]
    ))
    const newRows = dummyRows.map( row => row.filter( (row, i) => (
      i === 0 ? true : isColVisible[i - 1]
    )))
    this.setState({ColumnHeaders: newHeaders, Rows: newRows})
  }

  filterDataByQuery = (text) => {
    const newRows = dummyRows.filter( row => row[0].includes(text))
    this.setState({Rows: newRows})
  }

  render() {
    return (
      <div className="cfg-table-container">
        <div className="cfg-table-controls">
          <label>QUERY
            <input type="text" value={this.state.query} onChange={this.handleOnChange}></input>
          </label>
          <button className="columns-menu-button" onClick={this.handleMenuButtonClick}>COLUMNS</button>
        </div>
        {this.state.isMenuVisible && <ColumnsMenu ColumnHeaders={dummyHeaders.slice(1)} isColVisible={this.state.isColVisible} handleColumnMenuClick={this.handleColumnMenuClick}/>}
        <div className="cfg-table">
          <div className="cfg-table-row cfg-table-header">
            {this.state.ColumnHeaders.map( (header, i) => 
            <div className="cfg-table-cell cfg-table-header-cell" onClick={() => this.handleHeaderClick(i)} key={i}>
              <SortArrows/>{header}
            </div>)}
          </div>
          {!this.state.Rows.length && <div id="no-records">No records matched the specified query.</div>}
          {this.state.Rows.map( (row, i) => (
            <ConfigurableTableRow rowData={row} key={i}/>
          ))}
        </div>
      </div>
    )
  }
}

export default ConfigurableTable