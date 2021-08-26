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
        if (e.response.status === 404) {
          throw Error('data not found');
        } else if (e.response.status === 401) {
          throw Error('you are not authorized');
        } else if (e.response.status === 500) {
          throw Error('sorry.. we are working on this right now');
        } else {
          throw Error('something went wrong');
        }
      }
    };
  }
}

export const entriesCollection = new ApiCLient(entryUrl);
export const assetsCollection = new ApiCLient(assetUrl);
