import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function InstagramCircleIcon({ size }) {
  return (
    <div className="iconBodyCircle" style={{ width: 55, height: 55 }}>
      <FontAwesomeIcon icon={faInstagram} style={{ width: `${size}`, height: `${size}` }} />
    </div>
  );
}
