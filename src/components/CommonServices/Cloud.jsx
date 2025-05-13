import React from 'react';

import CloudServiceImage from '../../assets/images/cloud-service.png'
import DetailService from '../DetailService/DetailService'
import { CloudService, CloudBenefitsItems, CloudExpertiseItems } from '../../data/DigitalMarketingData'

const Cloud = () => {
  
  return (
    <>
      <DetailService
        title={'Cloud & DevOps'}
        subtitle={'We help businesses migrate their applications and data to cloud platforms like AWS, Azure, and Google Cloud for improved efficiency and scalability.'}
        heroAnchor={'our-serviceseach'}
        services={CloudService}
        imageSrc={CloudServiceImage}
        expertiseItems={CloudExpertiseItems}
        benefitsItems={CloudBenefitsItems}
        heroImageAlt={'Cloud & DevOps'}
        key={'Cloud & Devops Service'}
      />
    </>
  );
};

export default Cloud;