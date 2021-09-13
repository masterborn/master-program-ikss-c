import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export default function LinkedinIcon({ color, size }) {
  const Body = styled.div`
    display: inline-block;
    font-size: ${(props) => props.size};
  `;
  return (
    <Body className="iconBody" size={size}>
      <FontAwesomeIcon icon={faLinkedin} style={{ color: `${color}` || 'white' }} />
    </Body>
  );
}
