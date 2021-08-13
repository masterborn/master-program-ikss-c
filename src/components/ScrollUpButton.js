import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ScrollUpButton() {
  return (
    <div className="ScrollUpButtonBody">
      <FontAwesomeIcon icon={faChevronUp} />
    </div>
  );
}
