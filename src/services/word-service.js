import axios from 'axios';

class WordService {
  constructor() {
    this.word = axios.create({
      baseURL: 'https://api.gavagai.se/v3/lexicon',
      withCredentials: false
    })
  }

  async getWordSemantics(params) {
    const auth = 'apiKey=8c79736f393ab6eff4a864fcfa23344c'
    const fields = 'additionalFields=SEMANTICALLY_SIMILAR_WORDS'
    const response = await this.word.get(`${params}?${fields}&${auth}`);
    return response;
  }

  async getWordInfo(word) {
    const response = await this.word.get(`${word}/info?`);
    return response;
  }
}

const wordService = new WordService();

export default wordService;