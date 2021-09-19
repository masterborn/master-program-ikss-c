import React from 'react';
import extractImageUrl from '@root/utils';
import Card from '../../UI/Cards/card';

function ProjectItem({ project, assets }) {
  const { date, title, description, linkUrl, linkCaption, image, videoUrl } = project.fields || {};
  const desc = description?.content.map((x) => x.content.find((y) => y.value).value).toString();
  const imageUrl = extractImageUrl(image, assets);
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
