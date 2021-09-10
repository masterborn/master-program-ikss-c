import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { PrimaryButton, SecondaryButton } from './Button';

export function FaPrimaryButton({ content, link }) {
  return (
    <PrimaryButton as="a" href={link}>
      <FontAwesomeIcon icon={faFacebookF} style={{ maxHeight: '15', color: 'white' }} />
      &nbsp;{content}{' '}
    </PrimaryButton>
  );
}
export function Button({ content, link }) {
  return (
    <PrimaryButton as="a" href={link}>
      {content}{' '}
    </PrimaryButton>
  );
}

export function FaSecondaryButton() {
  return (
    <SecondaryButton>
      <FontAwesomeIcon icon={faFacebookF} style={{ maxHeight: '15' }} />
      &nbsp;Secondary
    </SecondaryButton>
  );
}
