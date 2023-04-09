import React from 'react';
import { useTranslation } from 'next-i18next';
import Button from '../Button';
import { LanguageIcon, UserIcon } from '../Icons';
import { useRouter } from 'next/router';
import { cn } from '@/helpers/cn';

interface IProps {
  className?: string;
  handleOpen: () => void;
  restaurant: any
}

const Navbar: React.FC<IProps> = ({ className, handleOpen,restaurant={} }) => {
  const { name} = restaurant
  const { t } = useTranslation();
  const router = useRouter();
  const handleLanguageChange = () => {
    router.push(router.pathname, router.asPath, {
      locale: router.locale === 'ar' ? 'en' : 'ar',
    });
  };
  return (
    <header
      className={cn`py-[10px] px-[25px] flex justify-between items-center bg-full-dark ${className}`}
    >
      <Button className="" onClick={handleOpen}>
        {name}
      </Button>
      <div className="flex items-center">
        <button
          className="flex items-center mr-4 text-white outline-none"
          onClick={handleLanguageChange}
        >
          <LanguageIcon className="mr-2" />
          {t('name')}
        </button>
        <a href="#" className="flex items-center text-white">
          <UserIcon className="mr-2" />
          {t('login')}
        </a>
      </div>
    </header>
  );
};

export default Navbar;
