import React from 'react';

import DetailService from '../DetailService/DetailService'
import webServiceImage from '../../assets/images/web-service.png';
import { WebbenefitsItems, WebexpertiseItems, Webservices } from '../../data/DigitalMarketingData'

const WebDevelopmentPage = () => {
  return (
    <>
      <DetailService
        title={'Web Development'}
        subtitle={'Building high-performance websites for businesses of all sizes.'}
        heroAnchor={'our-serviceseach'}
        services={Webservices}
        imageSrc={webServiceImage}
        expertiseItems={WebexpertiseItems}
        benefitsItems={WebbenefitsItems}
        heroImageAlt={'Web Development'}
        key={'Web Service'}
      />
    </>
  );
};

export default WebDevelopmentPage;