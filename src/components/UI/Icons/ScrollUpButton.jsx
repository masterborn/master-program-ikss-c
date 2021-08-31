import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';

export default function ScrollUpButton() {
  const [browserWindow, setBrowserWindow] = useState({});

  useEffect(() => {
    setBrowserWindow(window);
  }, []);

  const scrollToTop = () => {
    browserWindow.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button type="button" onClick={scrollToTop} className="ScrollUpButtonBody">
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}
