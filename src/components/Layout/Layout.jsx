import React, { useEffect, useState } from 'react';
import { getBasicContent } from '@root/api/cmsClient';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function Layout({ children }) {
  const [navAndFooterData, setNavAndFooterData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getLinksToSocial = async () => {
      try {
        const basicData = await getBasicContent();
        const commonData = basicData.filter((position) => position.fields.page === 'common');
        setNavAndFooterData(commonData);
      } catch (err) {
        setError(err.message);
      }
    };
    getLinksToSocial();
  }, []);

  return (
    <div>
      <h3>{error}</h3>
      <Navbar navAndFooterData={navAndFooterData} />
      <main>{children}</main>
      <Footer navAndFooterData={navAndFooterData} />
    </div>
  );
}

export default Layout;
