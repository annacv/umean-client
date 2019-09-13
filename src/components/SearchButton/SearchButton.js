import React, {Component} from 'react'
import './searchButton.scss'

class SearchButton extends Component {
  render() {
    return (
      <button 
        className={this.props.className}
        type='submit'
        children={this.props.children}
      >
      </button>
    )
  }
}

export default SearchButton
