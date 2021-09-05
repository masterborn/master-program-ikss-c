import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import NavigationMenu from './NavigationMenu'

const styles = {
  zIndex: '1000',
  bmBurgerButton: {
    position: 'fixed',
    width: '18px',
    height: '12px',
    right: '22px',
    top: '27px',
  },
  bmBurgerBars: {
    background: '#1889E9',
  },
  bmCrossButton: {
    height: '21px',
    width: '29px',
  },
  bmCross: {
    height: '14px',
    width: '14px',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '120%',
    top: '0',
    right: '0',
    width: '80%',
    boxShadow: '0px 4px 16px rgba(97, 121, 139, 0.1)',
    // borderRadius: '15px',
  },
  bmMenu: {
    background: '#fff',
    fontSize: '16px',
    borderRadius: '16px',
    padding: '0, 20px, 30px 0',
    width: '110%',
  },
  bmItemList: {
    display: 'flex',
    flexDirection: 'column',
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    left: '0',
    top: '0',
    background: '#1A2847',
    opacity: 0.6,
  },
};

function HamburgerMenu({pathname}) {

  return (
    <Menu
      right
      styles={styles}
      customCrossIcon={
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.295 0.705C12.9056 0.315639 12.2744 0.315639 11.885 0.705L7 5.59L2.115 0.705C1.72564 0.315639 1.09436 0.315639 0.705 0.705C0.315639 1.09436 0.315639 1.72564 0.705 2.115L5.59 7L0.705 11.885C0.315639 12.2744 0.315639 12.9056 0.705 13.295C1.09436 13.6844 1.72564 13.6844 2.115 13.295L7 8.41L11.885 13.295C12.2744 13.6844 12.9056 13.6844 13.295 13.295C13.6844 12.9056 13.6844 12.2744 13.295 11.885L8.41 7L13.295 2.115C13.6844 1.72564 13.6844 1.09436 13.295 0.705Z"
            fill="#61798B"
          />
        </svg>
      }
    > 
      <NavigationMenu pathname={pathname} className="menu-item" hamburger/>
      {/* <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a showSettings={showSettings} className="menu-item--small" href="">
        Settings
      </a> */}
    </Menu>
  );
}

export default HamburgerMenu;