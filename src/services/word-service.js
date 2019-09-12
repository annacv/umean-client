import axios from 'axios';

class WordService {
  state = {
    auth: 'apiKey=8c79736f393ab6eff4a864fcfa23344c'
  }

  constructor() {
    this.word = axios.create({
      baseURL: 'https://api.gavagai.se/v3',
      withCredentials: false
    })
  }

  async getAvailableLanguages() {
    const { auth } = this.state
    const response = await this.word.get(`languages?${auth}`);
    return response;
  }

  async getWordSemantics(params) {
    const { auth } = this.state
    const fields = 'additionalFields=SEMANTICALLY_SIMILAR_WORDS'
    const response = await this.word.get(`/lexicon/${params}?${fields}&${auth}`);
    return response;
  }

  async getWordInfo(word) {
    const { auth } = this.state
    const response = await this.word.get(`/lexicon/en/${word}/info?${auth}`);
    return response;
  }
}

const wordService = new WordService();

export default wordService;