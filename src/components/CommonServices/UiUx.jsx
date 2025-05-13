import React from 'react';

import DetailService from '../DetailService/DetailService'

import uiUxServiceImage from '../../assets/images/ui-ux-service.png';
import { UIservices, UIbenefitsItems, UIexpertiseItems } from '../../data/DigitalMarketingData'

const UxUiPage = () => {
  return (
    <>
      <DetailService
        title={'UI/UX Design & Research'}
        subtitle={'With structured UI/UX processes, we minimize redesign efforts, speeding up development and reducing costs.'}
        heroAnchor={'our-serviceseach'}
        services={UIservices}
        imageSrc={uiUxServiceImage}
        expertiseItems={UIexpertiseItems}
        benefitsItems={UIbenefitsItems}
        heroImageAlt={'UI/UX Design & Research'}
        key={'UIUXService'}
      />
    </>
  );
};

export default UxUiPage;