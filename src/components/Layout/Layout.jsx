import React from 'react';
import Footer from './Footer/Footer';

function Layout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
