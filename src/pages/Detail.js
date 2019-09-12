import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import wordService from '../services/word-service'
import './detail.scss';

class Detail extends Component {
  state = {
    word: '',
    additionalInformation: '',
    frequency: '',
    documentFrequency: '',
    absoluteRank: '',
    relativeRank: ''
  }

  componentDidMount() {
    const { word } = this.props.match.params
    wordService.getWordInfo(word)
      .then((data) => {
        this.setState({
          concurrence: data.data,
          word: data.data.word,
          additionalInformation: data.data.additionalInformation.link,
          frequency: data.data.frequency,
          documentFrequency: data.data.documentFrequency,
          absoluteRank: data.data.absoluteRank,
          relativeRank: data.data.relativeRank
        })
      })
  }

  render() {
    const { word, additionalInformation, frequency, documentFrequency, absoluteRank, relativeRank } = this.state
    return (
      <div className='section-container'>
        <div className='detail__meaningful-content'>
          <h2 
            className='detail__word'
            children= { word }
          />
          <Link 
            to= {additionalInformation } 
            aria-label= 'By clicking you will navigate to another page' 
            className='detail__link'
            children= { additionalInformation }
          />
        </div>
        <ul className='detail__data-content'>
          <li className='detail__data-item'>
            <p className='detail__data-item--label'>frequency</p>
            <p className='detail__data-item--highlighted'>{ frequency }</p>
          </li>
          <li className='detail__data-item'>
            <p className='detail__data-item--label'>document frequency</p>
            <p className='detail__data-item--highlighted'>{ documentFrequency }</p>
          </li>
          <li className='detail__data-item'>
            <p className='detail__data-item--label'>absolute rank</p>
            <p className='detail__data-item--highlighted'>{ absoluteRank }</p>
          </li>
          <li className='detail__data-item'>
            <p className='detail__data-item--label'>relative rank</p>
            <p className='detail__data-item--highlighted'>{ relativeRank }</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Detail

