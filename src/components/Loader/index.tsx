import React from 'react';
import { LocationIcon } from '../Icons';


const Loader : React.FC<any> = () => {
  return (
    <span className="relative flex w-5 h-5 ml-2">
            <span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-5 h-5 bg-red-500 rounded-full"></span>
          </span>
  );
};

export default Loader;
