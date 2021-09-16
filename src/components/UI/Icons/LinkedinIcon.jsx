import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

  const Body = styled.div`
    display: inline-block;
    font-size: ${(props) => props.size};
  `;
export default function LinkedinIcon({ color, size }) {
  return (
    <Body className="iconBody" size={size}>
      <FontAwesomeIcon icon={faLinkedin} style={{ color: `${color}` || 'white' }} />
    </Body>
  );
}
