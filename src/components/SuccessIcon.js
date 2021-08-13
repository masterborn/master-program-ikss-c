import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SuccessIcon() {
  return (
    <div className="iconBody">
      <FontAwesomeIcon icon={faCheckCircle} />
    </div>
  );
}
