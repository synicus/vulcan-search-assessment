import React, { Component } from 'react'
import './TitleScraper.css'
import debounce from 'lodash/debounce'

class TitleScraper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      title: null,
      isFetching: false
    }
    this.debouncedScrapeTitle = debounce(this.scrapeTitle, 2000)
  }
  
  handleChange = (e) => {
    this.setState({value: e.target.value})
    e.target.value.length 
      ? this.debouncedScrapeTitle()
      : this.setState({title: null})
  }

  scrapeTitle = () => {
    this.setState({isFetching: true})
    const regex = new RegExp('<title>(.+)</title>')

    // Because we're doing front-end scraping, I've used a proxy to bypass CORS issues
    let uri = 'https://allorigins.me/get?method=raw&url=' + encodeURIComponent('http://' + this.state.value)

    fetch(uri)
      .then(res => res.text())
      .then(data => regex.exec(data))
      .then(match => {
        match[1] === ''
          ? this.setState({title: 'The page does not have a title', isFetching: false})
          : this.setState( {title: match[1], isFetching: false} )
      })
      .catch(err => this.setState({title: 'Invalid URL, please try again', isFetching: false}) )
  }
  
  render() {
    return (
      <div className="title-scraper">
        <div className="label">URL</div>
        <form>
          http://
          <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} 
          />
        </form>
        <div className="label">TITLE</div>
        <h3>{this.state.isFetching ? 'Loading...' : this.state.title}</h3>
      </div>
    )
  }
}

export default TitleScraper