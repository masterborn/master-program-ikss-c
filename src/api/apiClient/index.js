import axios from 'axios';
import config from '../../../config';

const entryUrl = `https://cdn.contentful.com/spaces/${config.CONTENTFUL_API_SPACE}/environments/master/entries?access_token=${config.CONTENTFUL_API_TOKEN}`;
const assetUrl = `https://cdn.contentful.com/spaces/${config.CONTENTFUL_API_SPACE}/environments/master/assets?access_token=${config.CONTENTFUL_API_TOKEN}`;

class ApiCLient {
  constructor(url) {
    this.url = url;
  }

  get getData() {
    return async () => {
      try {
        return await axios.get(`${this.url}`);
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }
}

export const entriesCollection = new ApiCLient(entryUrl);
export const assetsCollection = new ApiCLient(assetUrl);
