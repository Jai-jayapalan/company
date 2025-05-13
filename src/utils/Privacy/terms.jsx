import React from 'react';
import { termsItems } from '../../data/datas';

import { AccordianPage } from '..';

const Terms = () => {
  return (
    <AccordianPage
      pageTitle="Terms & Conditions"
      description={
        <>
          Welcome to <span>Cospixare Technologies</span>. By using our services, you agree to our terms and policies.
          Please read our terms carefully before using our platform.
        </>
      }
      subtitle={
        <>
          Please read our terms carefully before using our services. By engaging with <span>Cospixare Technologies</span>,
          you agree to these terms.
        </>
      }
      buttonText="Read More"
      items={termsItems}
    />
  );
};

export default Terms;
