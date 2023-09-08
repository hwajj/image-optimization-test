import React from 'react';
import Image from 'next/image'
import AmandaPhung from '/public/photos/amanda-phung-1w2xsyc2wwI-unsplash.jpg'
const Page = () => {
  return (
    <div>
      <Image
        width={100}
        height={100}
        src={AmandaPhung}
        alt={'amanda-phung'}
      />
    </div>
  );
};

export default Page;