export default function extractImageUrl(image1, assets) {
  let url;
  if (image1) {
    url = assets.find((image) => image.sys.id === image1.sys.id).fields.file.url;
    return url;
  }
  return null;
}
