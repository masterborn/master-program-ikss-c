import styled from 'styled-components';
import Error404 from '@root/components/UI/404/error404';
import { Button } from '@root/components/UI/Button/FaButton';
import Navbar from '@root/components/Layout/Navbar/Navbar';

const StyledErrorPage = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(180deg, #f4faff 0%, rgba(255, 255, 255, 0) 100%);
`;

const StyledParagraph = styled.p`
  margin: 32px auto;
  font-size: 20px;
`;

function NotFound() {
  return (
    <StyledErrorPage> 
      <Navbar />
      <Error404 />
      <h1>ups, 404</h1>
      <StyledParagraph >Za każdym razem kiedy trafiasz na tę stronę, ktoś wymawia „i-ka-ka-es” zamiast „ikss”.</StyledParagraph>
      <Button content='Uciekam stąd' link="/" />
    </StyledErrorPage>
  );
}
export default NotFound;
