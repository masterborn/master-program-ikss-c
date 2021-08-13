import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SpinnerIcon() {
  return (
    <div className="iconBody">
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
}
