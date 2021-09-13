import React from 'react';
import styled from 'styled-components';
import { blueTints, color } from '@root/styles/GlobalStyles';
import PhoneIcon from '@root/components/UI/Icons/PhoneIcone';
import MailIcon from '@root/components/UI/Icons/MailIcon';
import LinkedinIcon from '@root/components/UI/Icons/LinkedinIcon';
import { SecondaryButton } from '@root/components/UI/Button/Button';

const MemberCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 384px;
  height: 456px;
  padding: 32px 24px 40px;
  background-color: #fff;
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  margin: 50px auto;
`;
const PhotoContainter = styled.div`
  width: 164px;
  height: 164px;
  border-radius: 82px;
  background-image: ${(props) => `url(${props.photoUrl})`};
  background-color: ${blueTints.blue_20};
  background-repeat: no-repeat;
  background-size: cover;
`;
const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-decoration: none;
  color: ${color.blue};
  margin-top: 24px;
`;
const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${color.blue};
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  & svg {
    margin-right: 12px;
  }
`;

const H5 = styled.h5`
  color: ${color.steel};
  padding-top: 8px;
`;

function MemberCard() {
  return (
    <MemberCardWrapper>
      <PhotoContainter photoUrl="https://images.ctfassets.net/n21y2i4hkj4h/2SbhYPaA4CB0py9yTVYNGB/5f5c03ba0553fe56e9c439ac826972e8/Micha___Ho__ownia-min.jpg.png" />
      <h4>Piotr Kowalski</h4>
      <H5>Członek zarządu ds. Kontaktów</H5>
      <ContactSection>
        <StyledAnchor href="tel:+48790603986">
          <PhoneIcon color={color.blue} />
          790 603 986
        </StyledAnchor>
        <StyledAnchor href="mailto: test@test.com">
          <MailIcon color={color.blue} />
          testowy@mail.com
        </StyledAnchor>
        <SecondaryButton size="small">
          <LinkedinIcon size="18px" color="black" /> LinkedIn
        </SecondaryButton>
      </ContactSection>
    </MemberCardWrapper>
  );
}

export default MemberCard;
