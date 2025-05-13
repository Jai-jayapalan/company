import React from 'react';

import DetailService from '../DetailService/DetailService'
import logoServiceImage from '../../assets/images/logo-service.png'
import { logoService, logoBenefitsItems, logoExpertiseItems } from '../../data/DigitalMarketingData'

const BrandStrategyPage = () => {

  return (
    <>
      <DetailService
        title={'Brand Strategy & Identity'}
        subtitle={'Our logos are designed to be adaptable for websites, business cards, merchandise, and digital media without losing quality.'}
        heroAnchor={'our-serviceseach'}
        services={logoService}
        imageSrc={logoServiceImage}
        expertiseItems={logoExpertiseItems}
        benefitsItems={logoBenefitsItems}
        heroImageAlt={'Brand Strategy & Identity'}
        key={'Logo&BrandService'}
      />
    </>
  );
};

export default BrandStrategyPage;