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
  justify-content: space-between;
  align-items: center;
  width: 384px;
  min-height: 456px;
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
  /* flex-direction: column; */
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  text-decoration: none;
  color: ${color.blue};
  margin: 24px 0;
  height: 48px;
`;
const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 51%;
  text-decoration: none;
  color: ${color.blue};
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  & svg {
    margin-right: 12px;
  }
  :last-child {
    align-self: flex-end;
  }
`;

const H5 = styled.h5`
  color: ${color.steel};
`;
const H4 = styled.h4`
  padding: 24px 0 8px;
`;

function MemberCard({ member }) {
  const { name, role, email, phone, linkedinUrl } = member.fields || {};

  return (
    <MemberCardWrapper>
      <PhotoContainter photoUrl="https://images.ctfassets.net/n21y2i4hkj4h/2SbhYPaA4CB0py9yTVYNGB/5f5c03ba0553fe56e9c439ac826972e8/Micha___Ho__ownia-min.jpg.png" />
      <H4>{name}</H4>
      <H5>{role}</H5>
      <ContactSection>
        <StyledAnchor href="tel:+48790603986">
          <PhoneIcon color={color.blue} />
          {phone}
        </StyledAnchor>
        <StyledAnchor href="mailto: test@test.com">
          <MailIcon color={color.blue} />
          {email}
        </StyledAnchor>
      </ContactSection>
      <SecondaryButton size="small">
        <a href={linkedinUrl}>
          <LinkedinIcon size="18px" color="black" /> LinkedIn
        </a>
      </SecondaryButton>
    </MemberCardWrapper>
  );
}

export default MemberCard;
