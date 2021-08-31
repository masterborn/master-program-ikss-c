import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function YoutubeCircleIcon({ size, body }) {
  return (
    <div className="iconBodyCircle" style={{ width: `${body}`, height: `${body}` }}>
      <FontAwesomeIcon icon={faYoutube} style={{ width: `${size}`, height: `${size}` }} />
    </div>
  );
}
