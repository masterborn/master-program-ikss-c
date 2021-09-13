import React from 'react';
import { StyledCheckboxLabel, StyledCheckbox } from './FormStyles';
import ToolTip from './ToolTip';

function CheckBox({toolTipText}) {
    return (
      <StyledCheckboxLabel htmlFor="check">
        <StyledCheckbox id="check" type="checkbox" required />
        Zapoznałem się z
        <a href="https://uodo.gov.pl/">
          <ToolTip toolTipText={toolTipText}>
            informacją o administratorze i przetwarzaniu danych.
          </ToolTip>
        </a>
      </StyledCheckboxLabel>
    );
};

export default CheckBox;
