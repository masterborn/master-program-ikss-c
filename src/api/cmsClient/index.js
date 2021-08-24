import getResource from '../utils';

export async function getProjects() {
  const result = await getResource('projects');
  return result;
}
export async function getPartnerLogos() {
  const result = await getResource('partnerLogos');
  return result;
}
export async function getBoardMembers() {
  const result = await getResource('boardMembers');
  return result;
}
export async function getBasicContent() {
  const result = await getResource('basicContent');
  return result;
}

export async function getVideoAssetUrl() {}

export async function getAllEntries() {
  const result = await getResource();
  return result;
}
