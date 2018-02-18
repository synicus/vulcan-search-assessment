import React, { Component } from 'react'
import './App.css'
import GoogleSearchItem from './GoogleSearchItem/GoogleSearchItem.js'
import TitleScraper from './TitleScraper/TitleScraper.js'
import ConfigurableTable from './ConfigurableTable/ConfigurableTable.js'
import HeatMap from './HeatMap/HeatMap.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='solution'>
          <h1>Solution 1<span>Google Search Item</span></h1>
          <GoogleSearchItem 
            title='Vulcan Search: Digital Marketing Solutions Powered by Data Intelligence' 
            url='https://vulcansearch.com' 
            description='Digital marketing solutions designed to amplify performance and drive sustainable growth through multi-channel integration and cognitive technology.' 
          />
        </div>
        <div className='solution'>
          <h1>Solution 2<span>Title Scraper</span></h1>
          <TitleScraper/>
        </div>
        <div className='solution'>
          <h1>Solution 3<span>Configurable Table</span></h1>
          <ConfigurableTable />
        </div>
        <div className='solution'>
          <h1>Solution 4<span>Heat Map</span></h1>
          <HeatMap />
        </div>
      </div>
    );
  }
}

export default App
