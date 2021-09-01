import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FacebookCircleIcon({ size, body }) {
  return (
    <div className="iconBodyCircle" style={{ width: `${body}`, height: `${body}` }}>
      <FontAwesomeIcon icon={faFacebookF} style={{ width: `${size}`, height: `${size}` }} />
    </div>
  );
}
