import React from "react";
import { StyledToolTip, ToolTipText } from './FormStyles';

const ToolTip = ({ children, toolTipText }) => (
  <StyledToolTip>
    {children}
    <ToolTipText>{toolTipText}</ToolTipText>
  </StyledToolTip>
);

export default ToolTip;