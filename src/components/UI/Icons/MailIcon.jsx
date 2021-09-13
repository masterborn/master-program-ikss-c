import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MailIcon({color}) {
  return (
    <div className="iconBody">
      <FontAwesomeIcon style={{color: `${color}`}} icon={faPaperPlane} />
    </div>
  );
}
