import React, { Component } from 'react'
import './App.css'
import GoogleSearchItem from './GoogleSearchItem/GoogleSearchItem.js'
import TitleScraper from './TitleScraper/TitleScraper.js'
import ConfigurableTable from './ConfigurableTable/ConfigurableTable.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='solution'>
          <h1>Solution 1</h1>
          <GoogleSearchItem 
            title='Vulcan Search: Digital Marketing Solutions Powered by Data Intelligence' 
            url='https://vulcansearch.com' 
            description='Digital marketing solutions designed to amplify performance and drive sustainable growth through multi-channel integration and cognitive technology.' 
          />
        </div>
        <div className='solution'>
          <h1>Solution 2</h1>
          <TitleScraper/>
        </div>
        <div className='solution'>
          <h1>Solution 3</h1>
          <ConfigurableTable />
        </div>
      </div>
    );
  }
}

export default App
