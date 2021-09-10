import React from 'react';
import { StyledCheckbox } from './FormStyles';
import ToolTip from './ToolTip';

function CheckBox({toolTipText}) {
    return (
        <StyledCheckbox htmlFor="check">
        <input id="check" type="checkbox" required />
        Zapoznałem się z
        <a href="https://uodo.gov.pl/">
            <ToolTip toolTipText={toolTipText}>
            informacją o administratorze i przetwarzaniu danych.
            </ToolTip>
        </a>
        </StyledCheckbox>
    )
};

export default CheckBox;
