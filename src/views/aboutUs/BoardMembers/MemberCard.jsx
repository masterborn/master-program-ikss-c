import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Collapse from '@kunukn/react-collapse';
import { ButtonSmall } from '@root/styles/GlobalStyles';
import PhoneIcon from '@root/components/UI/Icons/PhoneIcone';
import MailIcon from '@root/components/UI/Icons/MailIcon';
import LinkedinIcon from '@root/components/UI/Icons/LinkedinIcon';
import { SecondaryButton } from '@root/components/UI/Button/Button';
import { extractImageUrlFromAssets } from '@root/api/utils';
import Vector from '@root/components/UI/Icons/Vector';

const collapsed = css`
  flex-direction: row;
  justify-content: flex-start;
  min-height: 120px;
  padding: 20px;
  & .collapse-css-transition {
    display: none;
  }
`;

const MemberCardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 384px;
  padding: 32px 24px 40px;
  margin: 12px;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;
  & .collapse-css-transition {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1250px) and (min-width: 830px) {
    min-height: 484px;
  }
  ${({ isOpen }) => (isOpen ? '' : collapsed)}
`;

const normalSizePhoto = css`
  width: 164px;
  height: 164px;
  border-radius: 82px;
`;
const mobileSizePhoto = css`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  margin-right: 24px;
`;

const PhotoContainter = styled.div`
  flex: none;
  background-image: ${(props) => `url(${props.photoUrl})`};
  background-color: ${(props) => props.theme.color.blue_20};
  background-repeat: no-repeat;
  background-size: cover;
  ${({ isOpen }) => (isOpen ? normalSizePhoto : mobileSizePhoto)}
  transition: all .3s;
`;

const ContactSection = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  text-decoration: none;
  color: ${(props) => props.theme.color.blue};
  margin: 24px 0;
  height: 48px;
`;
const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 51%;
  text-decoration: none;
  color: ${(props) => props.theme.color.blue};
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  & svg {
    margin-right: 12px;
    color: ${(props) => props.theme.color.blue};
  }
  :last-child {
    align-self: flex-end;
  }
`;

const H4 = styled.h4`
  padding: ${({ isOpen }) => (isOpen ? '24px 0 8px' : '0px 0 8px')};
`;

const H5 = styled.h5`
  color: ${(props) => props.theme.color.steel};
  ${({ isOpen }) => (isOpen ? '' : ButtonSmall)};
  text-align: ${({ isOpen }) => (isOpen ? 'center' : 'left')};
`;

const OpenCloseBtn = styled.button`
  display: none;
  @media (max-width: 830px) {
    display: block;
  }
  background: none;
  border: none;
  position: absolute;
  top: 21px;
  right: 26px;
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : '')};
  top: ${({ isOpen }) => (isOpen ? '21px' : '47%')};
  transition: all 0.3s;
`;
const NameSection = styled.div`
  text-align: ${({ isOpen }) => (isOpen ? 'center' : 'left')};
  margin-right: ${({ isOpen }) => (isOpen ? '0' : '50px')};
  @media (min-width: 830px) {
    min-height: 112px;
  }
`;

function MemberCard({ member, assets }) {
  const [isOpen, setIsOpen] = useState(true);
  const { name, role, email, phone, linkedinUrl, image } = member.fields || {};
  const photoUrl = extractImageUrlFromAssets(image, assets);

  return (
    <MemberCardWrapper isOpen={isOpen}>
      <PhotoContainter photoUrl={photoUrl} isOpen={isOpen} />
      <OpenCloseBtn isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        <Vector />
      </OpenCloseBtn>
      <NameSection isOpen={isOpen}>
        <H4 isOpen={isOpen} as={isOpen ? '' : 'h5'}>
          {name}
        </H4>
        <H5 isOpen={isOpen}>{role}</H5>
      </NameSection>
      <Collapse isOpen={isOpen}>
        <ContactSection>
          <StyledAnchor href={`tel:+48${phone}`}>
            <PhoneIcon />
            {phone}
          </StyledAnchor>
          <StyledAnchor href={`mailto: ${email}`}>
            <MailIcon />
            {email}
          </StyledAnchor>
        </ContactSection>
        <SecondaryButton size="small">
          <a href={linkedinUrl}>
            <LinkedinIcon size="18px" color="black" /> LinkedIn
          </a>
        </SecondaryButton>
      </Collapse>
    </MemberCardWrapper>
  );
}

export default MemberCard;
