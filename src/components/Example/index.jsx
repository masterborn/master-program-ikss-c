import React from 'react';
import { FaPrimaryButton, FaSecondaryButton } from '../UI/Button/FaButton';
import Error404 from '../UI/404/error404';

function Example() {
  return (
    <h1 style={{ textAlign: 'center' }}>
      Example
      <div>
        <FaPrimaryButton />
        <FaSecondaryButton />
        <Error404 />
      </div>
    </h1>
  );
}

export default Example;
