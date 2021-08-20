import axios from 'axios';
import config from '../../../config';

async function getCollection() {
  const response = await axios.get(
    `https://cdn.contentful.com/spaces/${config.CONTENTFUL_API_SPACE}/environments/master/entrie?access_token=${config.CONTENTFUL_API_TOKEN}`,
  );
  const result = response.data.items;
  return result;
}

export async function getProjects() {
  const data = await getCollection();
  const projects = data.filter((item) => item.sys.contentType.sys.id === 'projects');
  return projects;
}

export async function getPartnerLogos() {
  const data = await getCollection();
  const members = data.filter((item) => item.sys.contentType.sys.id === 'pertnerLogos');
  return members;
}
export async function getBoardMembers() {
  const data = await getCollection();
  const members = data.filter((item) => item.sys.contentType.sys.id === 'boardMembers');
  return members;
}
export async function getBasicContent() {
  const data = await getCollection();
  const content = data.filter((item) => item.sys.contentType.sys.id === 'basicContent');
  return content;
}
