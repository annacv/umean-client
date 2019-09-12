import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import wordService from '../../services/word-service'
import SearchButton from '../SearchButton/SearchButton'
import UmeanBrand from '../UmeanBrand/UmeanBrand'
import { MdExpandMore } from 'react-icons/md'
import {IoMdInformationCircle} from 'react-icons/io'
import './searchWordForm.scss'

class SearchWordForm extends Component {
  state = {
    availableLanguages: [],
    language: '',
    word: '',
    wordSemantics: []
  }

  componentDidMount() {
    wordService.getAvailableLanguages()
      .then((data) => {
        this.setState({
          availableLanguages: data.data
        })
      })
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const stateCopy = this.state;
    const propertyKeys = Object.keys(stateCopy);

    const params = [];

    for (let key of propertyKeys) {
      if (stateCopy[key].length > 0) {
        params.push({
          keyName: key,
          value: stateCopy[key]
        })
      }
    }

    let queryString = this.state.language + '/' + this.state.word;

    wordService.getWordSemantics(queryString)
      .then(({ data }) => {
        this.setState({
          wordSemantics: data.semanticallySimilarWords
        })
      })
  }

  render() {
    const { availableLanguages, word, wordSemantics } = this.state

    return (
      <section className='section-container'>
        <UmeanBrand/>
        <div className='form-container'>
          <form
            onSubmit={this.handleSubmit}
            className='search-word-form'
          >
            <div className='form__group select'>
              <label
                className='form__label' 
                htmlFor='language'
                children='language'
              />
              <select
                className='form__select-input'
                name='language' 
                id='language' 
                onChange={this.handleInputChange} 
                required
              > 
                <option 
                  value=''
                  children='Choose language'
                />
                { availableLanguages ? (
                   availableLanguages.map((language) => {
                     return <option default value={language.toLowerCase()} key={language}>{language.toLowerCase()}</option>
                   })) : 'en'
                }
              </select>
              <MdExpandMore className='form__select-input--icon'/>
            </div>
            <div className='form__group'>
              <label
                className='form__label' 
                htmlFor='word'
                children='word'
              />     
              <input 
                className='form__text-input' 
                id='word'
                type='text'
                name='word'
                placeholder='Enter your word'
                value={word}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <SearchButton/>
          </form>
        </div>
        <ul className='results__list'>
          { wordSemantics ? (
            wordSemantics.map((concurrence) => {
              return (
                <li 
                  className='results__card'
                  key={concurrence.word}
                >
                  <p 
                    className='results__key'
                    children={concurrence.word}
                  />
                  <p
                    className='results__content'
                  > strength
                    <span
                      className='results__content--highlighted'
                      children={concurrence.strength}
                    />
                  </p>
                  <Link 
                    to={ `/detail/${concurrence.word}` }
                    aria-label='By clicking you will navigate to another page'
                    className='results__link'
                    children={<IoMdInformationCircle className='results__link--icon'
                    />
                  }
                  />
                </li>
              )
            })
          ) : null }
        </ul>
      </section>
    )
  }
}

export default SearchWordForm


