import React from 'react';
import { PrimaryButton, SecondaryButton } from '../UI/Button/Button';

// const Example: FunctionComponent = () => <h1 style={{ textAlign: 'center' }}>Example</h1>;

// export default Example;
function Example() {
    return (
        <>
         Example
         <PrimaryButton>Primary</PrimaryButton>
         <PrimaryButton size='s'>Primary</PrimaryButton>
         <SecondaryButton>Secondary</SecondaryButton>
        </>
    )
}

export default Example;