import { useRestaurantContext } from '@/contexts/Restaurants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IProps {
  className: string;
}

const Footer = ({ className }: IProps) => {
  const {owner} = useRestaurantContext();

  return (
    <div className={`${className}`}>
      <div className="sm:container sm:mx-auto bg-full-dark">
        <p className="mb-5 text-center text-grey">
          Mecca, Rashidiya District, Engineer Omar Qazi Stree
        </p>
        <div className="flex flex-wrap items-center justify-center gap-5 mb-5">
          <div className="relative w-20 h-10">
            <Image alt="Footer logo" src="/f1.png" fill />
          </div>
          <div className="relative w-20 h-10">
            <Image alt="Footer logo" src="/f2.svg" fill />
          </div>
          <div className="relative h-6 w-14">
            <Image alt="Footer logo" src="/f3.png" fill />
          </div>
          <div className="relative w-10 h-6">
            <Image alt="Footer logo" src="/f4.png" fill />
          </div>
          <div className="relative w-16 h-6">
            <Image alt="Footer logo" src="/f5.png" fill />
          </div>
          <div className="relative w-16 h-6">
            <Image alt="Footer logo" src="/f6.png" fill />
          </div>
          <div className="relative w-16 h-6">
            <Image alt="Footer logo" src="/f7.png" fill />
          </div>
          <div className="relative w-16 h-6">
            <Image alt="Footer logo" src="/f8.png" fill />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <Link href="/" className="text-light hover:text-grey">
            Terms & Conditions
          </Link>
          <Link href="/" className="text-light hover:text-grey">
            Privacy Policy
          </Link>
          <Link href="/" className="text-light hover:text-grey">
            Cancelation & Refund Policy
          </Link>
          <Link href="/" className="text-light hover:text-grey">
            Shipping & Delivery Policy
          </Link>
          <Link href="/" className="text-light hover:text-grey">
            Contact us
          </Link>
        </div>
        <div className='flex justify-center gap-4 my-2' >
          {
            owner.snapchat &&
          <Image width="32" height="32" src="/icons/social-icons/twitter.png" alt="twitter"/>
          }
          {
            owner.tiktok &&
          <Image width="32" height="32" src="/icons/social-icons/twitter.png" alt="twitter"/>
          }
          {
            owner.twitter &&
          <Image width="32" height="32" src="/icons/social-icons/twitter.png" alt="twitter"/>
          }
          {
            owner.instagram &&
          <Image width="32" height="32" src="/icons/social-icons/twitter.png" alt="twitter"/>
          }
        </div>
        <div className='py-4'>
          <p className='text-center text-white'>This site is protected by reCAPTCHA and the google <Link href="#" >
            <b>Privacy Policy</b>
          </Link>  and  <Link href="#" >
            <b>Terms of Service</b>
          </Link> apply.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
