import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function PhoneIcon({color}) {
  return (
    <div className="iconBody">
      <FontAwesomeIcon style={{color: `${color}`}}icon={faPhoneAlt} />
    </div>
  );
}
