import ImageComponent, {ImageProps }  from 'next/image';
import { useState } from 'react';

interface Props extends ImageProps  {
  blurImageUrl?: string;
}

const Image: React.FC<Props> = ({
  src,
  blurImageUrl,
  alt='',
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
        <div className="w-full">
          {isLoading && (
            <div className="absolute top-0 left-0 w-full h-full bg-gray-300"></div>
          )}
          <ImageComponent
            src={src}
            alt={alt}
            {...rest}
            onLoad={handleLoad}
            className={isLoading ? 'opacity-0' : 'opacity-100'}
          />
        </div>
      )
};

export default Image;