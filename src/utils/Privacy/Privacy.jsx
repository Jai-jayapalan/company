import React from 'react';
import { privacyItems } from '../../data/datas';

import { AccordianPage } from '..';

const Privacy = () => {
  return (
    <AccordianPage
      pageTitle="Privacy Policy"
      description={
        <>
          Your privacy is important to us. At <span>Cospixare Technologies</span>, we are committed to
          protecting your personal data and providing transparency on how we collect, use, and safeguard it.
        </>
      }
      subtitle={
        <>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, 
          and protect your personal information at <span>Cospixare Technologies</span>.
        </>
      }
      buttonText="Read More"
      items={privacyItems}
    />
  );
};

export default Privacy;
