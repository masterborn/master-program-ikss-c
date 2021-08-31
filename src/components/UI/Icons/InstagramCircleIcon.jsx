import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InstagramCircleIcon({ size, body }) {
  return (
    <div className="iconBodyCircle" style={{ width: `${body}`, height: `${body}` }}>
      <FontAwesomeIcon icon={faInstagram} style={{ width: `${size}`, height: `${size}` }} />
    </div>
  );
}
