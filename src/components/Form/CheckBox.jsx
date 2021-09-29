import React from 'react';
import { StyledCheckboxLabel, StyledCheckbox } from './FormStyles';
import ToolTip from './ToolTip';

function CheckBox({toolTipText, onChange, onClick}) {
    return (
      <StyledCheckboxLabel htmlFor="check">
        <StyledCheckbox id="check" onChange={onChange} onClick={onClick} type="checkbox" />
        <span>Zapoznałem się z
        <ToolTip toolTipText={toolTipText}>
          informacją o administratorze i przetwarzaniu danych.
        </ToolTip>
        </span>
      </StyledCheckboxLabel>
    );
};

export default CheckBox;
