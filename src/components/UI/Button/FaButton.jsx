import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { PrimaryButton, SecondaryButton } from './Button';

export function FaPrimaryButton(){
    return <PrimaryButton><FontAwesomeIcon icon={faFacebookF} style={{maxHeight: '15'}}/>&nbsp; Primary</PrimaryButton>;
}

export function FaSecondaryButton(){
    return <SecondaryButton><FontAwesomeIcon icon={faFacebookF} style={{maxHeight: '15'}}/>&nbsp;Secondary</SecondaryButton>;
}
