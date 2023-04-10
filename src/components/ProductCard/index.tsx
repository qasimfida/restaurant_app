import { cn } from '@/helpers/cn';
import Link from 'next/link';
import React from 'react';
import Image from '../Image';
import { IProduct } from '@/types';

interface IProps {
  product?: IProduct
  className: string;
}

const ProductCard = ({ product={}, className }: IProps) => {
  const {id, image, name, price, calories} = product;
  return (
    <Link href={`/${id}`}
      className={cn`overflow-hidden py-4 block ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="">
          <div className="text-sm tracking-wide text-light">{name}</div>
          <div className="mt-2">
            <div className={cn`text-sm text-grey ${calories === null ? 'opacity-0': ''}`}>Calories = {calories}</div>
            <div className="mt-2 text-sm text-primary">{price} SAR</div>
          </div>
        </div>
        <div className="shrink-0">
          <div className="relative w-24 h-24 overflow-hidden rounded-xl">
            <Image className="rounded-lg" fill src={image || '/placeholders/product.png'} alt={name || "product-cover"} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
