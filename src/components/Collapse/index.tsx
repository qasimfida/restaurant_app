import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import ProductCard from '../ProductCard';
import { cn } from '@/helpers/cn';
import useAnimateHeightFromZeroToAuto from '@/hooks/useAnimateHeightFromZeroToAuto';

interface Product {
  id: number;
  title: string;
  calories: number;
  price: number;
}

interface IProps {
  title: string;
  quantity: number;
  active: boolean;
  isLoading: boolean;
  products: Product[];
  onOpen?: () => void;
  error?: any
}

const Collapse = ({
  title,
  quantity,
  active,
  onOpen,
  isLoading,
  products,
  error,
}: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
const ref = useRef<HTMLDivElement | null>(null)
  useEffect(()=>{
    if(active && ref){
      if (ref.current) {
        const node = ReactDOM.findDOMNode(ref.current);
        if (node instanceof Element) {
          node.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(active)
  },[active])

  const handleToggle = () => {
    if (onOpen) {
      onOpen();
    }
  };

  useAnimateHeightFromZeroToAuto(ref, 200,isOpen)
  return (
    <div className="mb-4">
      <div
        className={`flex justify-between items-center py-4 px-4 cursor-pointer border border-white rounded-lg ${
          isOpen ? '!border-primary' : ''
        }`}
        onClick={handleToggle}
      >
        <h3
          className={`text-[22px] text-white font-semibold flex items-center ${
            isOpen && '!text-primary'
          }`}
        >
          {title}
          <span className="ml-1 text-sm font-normal text-white">
            ({quantity})
          </span>
        </h3>
        <svg
          className={`w-6 h-6 transition-transform transform fill-white ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 15.5a.5.5 0 01-.354-.146l-5-5a.5.5 0 01.708-.708L10 14.293l4.646-4.647a.5.5 0 11.708.708l-5 5a.5.5 0 01-.354.146z"
            clipRule="evenodd"
          />
        </svg>
      </div>
        <div className={cn`px-4 transition-all duration-200 overflow-hidden `} ref={ref}  >
          {
            isLoading ? <span className="ml-1 text-sm font-normal text-center text-white">
              Fetching menu items
            </span> : error ? <span className="ml-1 text-sm font-normal text-center text-primary">
              Failed to fetch menu items
            </span>:

          <div className="flex flex-wrap">
            {products.map((product) => (
              <ProductCard
                className="w-full px-3 py-4  md:w-1/2 border-border sm:border-b"
                product={product}
              />
            ))}
          </div>
          }
        </div>
    </div>
  );
};

export default Collapse;
