import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function YoutubeIcon() {
  return (
    <div className="iconBody">
      <FontAwesomeIcon icon={faYoutube} style={{ color: 'white' }} />
    </div>
  );
}
