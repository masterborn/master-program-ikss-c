import axios from 'axios';

async function getCollection() {
  let response;
  try {
    response = await axios.get(
      `https://cdn.contentful.com/spaces/${process.env.SPACE}/environments/master/entries?access_token=${process.env.TOKEN}`,
    );
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    console.log(error);
  }
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
