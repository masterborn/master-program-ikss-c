const ENTRIES = ['basicContent', 'projects', 'partnerLogos', 'boardMembers'];

const groupByCollection = (itemsArray) => {
  const obj = {};
  for (const entry of ENTRIES) {
    obj[entry] = itemsArray.data.items.filter((x) => x.sys.contentType.sys.id === entry);
  }
  return obj;
};

export function extractBanerData(entries, assets) {
  const { basicContent } = groupByCollection(entries);
  const videoUrl = assets.data.items.find((a) => a.fields.title === 'na strone ikss');
  const bannerData = basicContent.filter(
    (v) =>
      v.fields.identifier === 'social-youtube' ||
      v.fields.identifier === 'social-instagram' ||
      v.fields.identifier === 'social-linkedin' ||
      v.fields.identifier === 'social-facebook',
  );
  bannerData.push(videoUrl);
  return bannerData;
}
function extractHomeProjectImage(imagesId, assets) {
  const url = [];
  for (const img of imagesId) {
    url.push(assets.data.items.find((image) => image.sys.id === img).fields.file.url);
  }
  return url;
}
export function extractHomeProjectData(entries, assets) {
  const { projects } = groupByCollection(entries);
  const homepageProjects = projects.filter((p) => p.fields.showOnHomepage);
  const imagesAsset = homepageProjects.filter((i) => i.fields);
  const imageAssetId = imagesAsset.map((el) => el.fields.image.sys.id);
  const imagesUrl = extractHomeProjectImage(imageAssetId, assets);
  return homepageProjects;
}
