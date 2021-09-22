import FacebookIcon from '@root/components/UI/Icons/FacebookIcon';
import InstagramIcon from '@root/components/UI/Icons/InstagramIcon';
import LinkedinIcon from '@root/components/UI/Icons/LinkedinIcon';
import YoutubeIcon from '@root/components/UI/Icons/YoutubeIcon';
import React from 'react';

function SocialLink({ socialUrl }) {
  const addSocialIcon = (url) => {
    let icon;
    if (url.includes('facebook')) {
      icon = <FacebookIcon />;
    } else if (url.includes('instagram')) {
      icon = <InstagramIcon />;
    } else if (url.includes('lin')) {
      icon = <LinkedinIcon color="white" />;
    } else if (url.includes('youtu')) {
      icon = <YoutubeIcon />;
    }
    return icon;
  };

  return (
    <a href={socialUrl} target="_self">
      {addSocialIcon(socialUrl)}
    </a>
  );
}

export default SocialLink;
