import getResource from '../utils';

export default async function getAllAssets() {
  const result = await getResource();
  return result;
}
