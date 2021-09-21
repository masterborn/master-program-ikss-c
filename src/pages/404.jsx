import styled from 'styled-components';
import Error404 from '@root/components/UI/404/error404';
import { Button } from '@root/components/UI/Button/FaButton';

const StyledErrorPage = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledParagraph = styled.p`
  margin: 32px 25px;
  font-size: 20px;
  @media (max-width: 860px) {
    font-size: 14px;
    line-height: 28px;
    margin: 24px 25px;
  }
`;

const StyledHeadline = styled.h1`
  @media (max-width: 860px) {
    font-size: 40px;
    line-height: 56px;
  }
`;

function NotFound() {
  return (
    <StyledErrorPage> 
      <Error404 />
      <StyledHeadline>ups, 404</StyledHeadline>
      <StyledParagraph>Za każdym razem kiedy trafiasz na tę stronę, ktoś wymawia „i-ka-ka-es” zamiast „ikss”.</StyledParagraph>
      <Button content='Uciekam stąd' link="/" />
    </StyledErrorPage>
  );
}
export default NotFound;
