import { useRestaurantContext } from '@/contexts/Restaurants';
import { cn } from '@/helpers/cn';
import React from 'react';
import Image from '../Image';

interface IProps {
  className: string;
}

const Hero:React.FC<IProps> = ({ className }) => {
  const {owner} = useRestaurantContext();
  return (
    <div className="relative mb-12">
      <div className={cn`relative w-full h-60`}
      >
        <Image
            className="bg-center bg-cover"
            fill
            priority
            src={owner?.backgroundImage || "/banner.jpg"}
            alt="logo"
            objectPosition="center"
            objectFit='cover'
          />
      </div>
      <div className="absolute -bottom-[30px] mx-auto px-4">
        <div className="flex items-end w-full ">
          <div className='relative w-20 h-20 mr-4 rounded-full shadow-2xl' >
            <Image
              className="rounded-lg"
              fill
              src={owner?.logo || "/icons/placeholders/logo.png"}
              alt="logo"
            />
          </div>
          <div>
            <h2 className="mb-3 text-2xl font-semibold text-light">
              {owner?.name}
            </h2>
            <p className="text-sm text-light">
              {owner?.about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
