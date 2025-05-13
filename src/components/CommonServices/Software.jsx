import React from 'react';

import DetailService from '../DetailService/DetailService'
import softwareServiceImage from '../../assets/images/software-service.png';
import { SoftwarebenefitsItems, SoftwareexpertiseItems, Softwareservices } from '../../data/DigitalMarketingData'

const SoftwareDevelopmentPage = () => {
  return (
    <>
      <DetailService
        title={'Custom Software Development'}
        subtitle={'Power your business with cutting-edge custom software solutions from Cospixare Technologies!'}
        heroAnchor={'our-serviceseach'}
        services={Softwareservices}
        imageSrc={softwareServiceImage}
        expertiseItems={SoftwareexpertiseItems}
        benefitsItems={SoftwarebenefitsItems}
        heroImageAlt={'Custom Software Development'}
        key={'SoftwareService'}
      />
    </>
  );
};

export default SoftwareDevelopmentPage;