import axios from 'axios';
import config from '../../../config';

// const responseHandler = (response) => response;

// const errorHandler = (e) => {
//   throw Error(`Status: ${e.response.status}. Requested URL: ${e.config.url}`);
// };

// axios.interceptors.response.use(
//   (response) => responseHandler(response),
//   (error) => errorHandler(error),
// );

const entryUrl = `https://cdn.contentful.com/spaces/${config.CONTENTFUL_API_SPACE}/environments/master/entries?access_token=${config.CONTENTFUL_API_TOKEN}`;
const assetUrl = `https://cdn.contentful.com/spaces/${config.CONTENTFUL_API_SPACE}/environments/master/assets?access_token=${config.CONTENTFUL_API_TOKEN}`;

class CmsCLient {
  getAllEntries = async () => {
    try {
      const entries = await axios.get(`${entryUrl}`);
      return entries;
    } catch (e) {
      return Promise.resolve(e);
    }
  };

  getAllAssets = async () => {
    try {
      const assets = await axios.get(`${assetUrl}`);
      return assets;
    } catch (e) {
      return Promise.resolve(e);
    }
  };
}
const cmsClient = new CmsCLient();
export default cmsClient;
