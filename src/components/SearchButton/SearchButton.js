import React from 'react'
import { MdSearch } from "react-icons/md"
import './searchButton.scss'

function SearchButton(props) {
  return (
    <button 
      className='btn'
      type='submit'
    >
      <MdSearch className='btn--icon'/>
    </button>
  )
}

export default SearchButton
