import React, { Component } from 'react'
import './TitleScraper.css'
import debounce from 'lodash/debounce'

class TitleScraper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      title: '',
      isFetching: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.scrapeTitle = this.scrapeTitle.bind(this)
    this.debouncedScrapeTitle = debounce(this.scrapeTitle, 2000)
  }
  
  handleChange(e) {
    this.setState({value: e.target.value})
    this.debouncedScrapeTitle()
  }

  scrapeTitle() {
    this.setState({isFetching: true})
    const regex = new RegExp('<title>(.+)</title>')

    // Because we're doing front-end scraping, I've used a proxy to bypass CORS issues
    let uri = 'https://allorigins.me/get?method=raw&url=' + encodeURIComponent('https://' + this.state.value)

    fetch(uri)
      .then(res => res.text())
      .then(data => regex.exec(data))
      .then(match => this.setState( {title: match[1], isFetching: false} ))
  }
  
  render() {
    return (
      <form>
        <label>
          https://
          <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
          />
        </label>
        <h3>TITLE: {this.state.isFetching ? 'Loading...' : this.state.title} </h3>
      </form>
    )
  }
}

export default TitleScraper