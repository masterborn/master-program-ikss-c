import React from 'react'
import styled from 'styled-components';


const StyledFooter = styled.footer`
  background-color: lightblue;
  width: 100%;
  position: fixed;
  bottom: 0;
`


function Footer() {
  return (
    <StyledFooter>
      <h3>Hello Footer</h3>
    </StyledFooter>
  )
}

export default Footer
