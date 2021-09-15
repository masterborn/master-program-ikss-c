import React from 'react';
import Card from '../../UI/Cards/card';

function extractImageUrl(imageId, assets) {
  let url;
  if (imageId) {
    url = assets.find((image) => image.sys.id === imageId).fields.file.url;
  }
  return url;
}

function ProjectItem({ project, assets }) {
  const { date, title, description, linkUrl, linkCaption, image, videoUrl } = project.fields || {};
  const desc = description?.content.map((x) => x.content.find((y) => y.value).value).toString();
  const imageUrl = extractImageUrl(image?.sys.id, assets);
  const renderedProject = {
    title,
    date,
    description: desc,
    linkCaption,
    linkUrl,
    videoUrl,
    imageUrl,
  };
  return <Card>{renderedProject}</Card>;
}

export default ProjectItem;