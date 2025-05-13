import React from 'react';

import digitalMarketingImage from '../../assets/images/digital-service.png';
import { benefitsItems, expertiseItems, services } from '../../data/DigitalMarketingData'
import DetailService from '../DetailService/DetailService'

const DigitalMarketingPage = () => {

  return (
    <>
      <DetailService
        title={'Digital Marketing'}
        subtitle={'Enhance your brand visibility, improve customer engagement, and drive sales with our advanced digital marketing strategies.'}
        heroAnchor={'our-serviceseach'}
        services={services}
        imageSrc={digitalMarketingImage}
        expertiseItems={expertiseItems}
        benefitsItems={benefitsItems}
        heroImageAlt={'Digital Marketing'}
        key={'DMService'}
      />
    </>
  );
};

export default DigitalMarketingPage;