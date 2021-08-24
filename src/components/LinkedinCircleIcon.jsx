import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LinkedinCircleIcon({ size }) {
  return (
    <div className="iconBodyCircle" style={{ width: 55, height: 55 }}>
      <FontAwesomeIcon icon={faLinkedin} style={{ width: `${size}`, height: `${size}` }} />
    </div>
  );
}
