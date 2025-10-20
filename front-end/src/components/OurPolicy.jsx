import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-6 py-20 px-4 text-gray-700">
      {/* Policy Block */}
      {[{
        icon: assets.exchange_icon,
        title: 'Easy Exchange Policy',
        description: 'We offer hassle free exchange policy'
      }, {
        icon: assets.quality_icon,
        title: '7 Days Return Policy',
        description: 'We provide 7 days free return policy'
      }, {
        icon: assets.support_img,
        title: 'Best Customer Support',
        description: 'We provide 24/7 customer support services'
      }].map((policy, index) => (
        <div key={index} className="flex flex-col items-center text-center space-y-2 max-w-xs">
          <img src={policy.icon} alt="" className="w-12 mb-4" />
          <p className="font-semibold text-sm sm:text-base">{policy.title}</p>
          <p className="text-gray-400 text-xs sm:text-sm">{policy.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OurPolicy;