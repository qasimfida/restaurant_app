import Button from '@/components/Button';
import {  ShareIcon } from '@/components/Icons';
import Input from '@/components/Input';
import Loader from '@/components/Loader';
import { cn } from '@/helpers/cn';
import { IProduct } from '@/types';
import Image from 'next/image';
import React from 'react';

interface IProps {
  product?: IProduct,
  isLoading?: boolean
}
const ProductDetailsContainer:React.FC<IProps> = ({product={}, isLoading}) => {

  return (
    <div className="relative h-auto min-h-screen sm:container sm:mx-auto bg-full-dark ">
      
      {isLoading && <div className='absolute top-0 left-0 z-10 flex items-center justify-center w-full h-full mx-auto text-xl text-white bg-full-dark' >
        Loading <Loader/>
      </div>}
      <div className='flex flex-col justify-between h-full' >
        <div>
          <div className={cn`relative w-full min-h-[240px]`}  >
            <Image
              className="bg-center bg-cover"
              fill
              priority
              src={product.image || "/banner.jpg"}
              alt="logo"
              objectPosition="center"
              objectFit='cover'
            />
          </div>
          <div className="relative px-5 pt-10 ">
            <div className="flex justify-between py-5">
              <h2 className="mb-3 text-2xl font-semibold capitalize text-light">
                {product.name}
              </h2>
              <p className="text-xl text-primary">{product.price} SAR</p>
            </div>
            <div className="flex items-center">
              <h3 className="mr-2 text-xl font-semibold text-white">Share</h3>
              <ShareIcon />
            </div>
            <div className={cn`mt-8 text-sm text-grey  ${product.calories === null ? 'opacity-0': ''}`}>Calories = {product.calories}</div>
            <div className='px-3 mt-10 border-t border-dark' >

          {
            product?.additions?.map((addition:any)=>(<Additions key={addition.id} {...addition} />))
          }
            </div>
            <div className="px-2 pt-6 pb-16 border-b border-dark">
              <h3 className="mb-3 mr-2 font-semibold text-white text-md">Notes</h3>
              <Input className="text-white "  value={product.description} />
            </div>
            <div className="flex items-center justify-between py-8 mb-10">
              <h3 className="mr-2 font-semibold text-white text-md">Quantity</h3>
              <div className='flex items-center ' >
                <Button className='flex items-center justify-center w-12 h-12 bg-transparent border-2 !rounded-full border-primary !p-0' >-</Button>
                <span className='text-center text-white w-14 ' >{1}</span>
                <Button className='flex items-center justify-center w-12 h-12 bg-transparent border-2 !rounded-full border-primary !p-0' >+</Button>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center h-20' >
          <Button variant='danger' icon={false} className='max-w-[400px] mx-auto !justify-center' >Add to basked</Button>
        </div>
      </div>
    </div>
  );
};

const Additions:React.FC<any> = ({id, name, options}) => {
  return <div className="px-2 pt-6 pb-6 ">
          <h3 className="mb-3 mr-2 font-semibold text-white text-md">{name}</h3>
          {
            options?.map((option:any)=>(
              
            <div className='flex justify-between py-3 my-2 border-b border-dark hover:border-white' >
              <div className='flex items-center' >
                <Input type="checkbox"  />
                <h3 className="mx-3 text-white text-md">{option.name}</h3>
              </div>
              <div>
                <h3 className="font-semibold text-primary text-md">{option.price ? `+ ${option.price} SAR`:''}</h3>
              </div>
            </div>
            ))
          }
        </div>
}

export default ProductDetailsContainer;
