import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LinkedinCircleIcon({ size, body }) {
  return (
    <div className="iconBodyCircle" style={{ width: `${body}`, height: `${body}` }}>
      <FontAwesomeIcon icon={faLinkedin} style={{ width: `${size}`, height: `${size}` }} />
    </div>
  );
}
