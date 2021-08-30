import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ScrollUpButton() {
  return (
    <button type="button" className="ScrollUpButtonBody">
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}
