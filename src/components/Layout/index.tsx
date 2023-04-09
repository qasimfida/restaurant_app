import Footer from '../Footer';
import Navbar from '../Navbar';
import Modal from '../Modal';
import { useEffect, useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import { useFetchRestaurants } from '@/apis/restaurants';
import { LocationIcon } from '../Icons';
import { IRestaurant } from '@/types';

const Layout:React.FC<any> = (props) => {
  const { data, error } = useFetchRestaurants();
  const [restaurants, setRestaurants ] = useState<IRestaurant[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [restaurant, setRestaurant] = useState<IRestaurant>({});
  const toggleModal = () => setIsOpen(!isOpen);
  const toggleRestaurant = (index: number) =>{
    setRestaurant(restaurants[index]);
    toggleModal()
  };
  useEffect(() => {
    if (data) {
      setRestaurants(data);
      setRestaurant(data[0])
    }
  }, [data, setRestaurants]);
  
  return (
    <>
      <div className="mx-auto max-w-[640pt]">
        <Navbar handleOpen={toggleModal} restaurant={restaurant}  />
        {props.children}
        <Modal isOpen={isOpen}>
          <div className="gap-4 mb-6 columns-1 sm:columns-2">
            <Input
              suffix={<LocationIcon className="absolute right-2 top-4" />}
              className=""
              placeholder="Enter your location name (optional)"
            />
          </div>
          <div className="relative flex justify-center w-full my-4 text-center border-b border-grey">
            <span className="text-grey bg-dark absolute px-4 -top-[12px]">
              Or
            </span>
          </div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Choose the nearest branch
          </h3>
          <div className="gap-4 columns-1 sm:columns-2">
            {restaurants?.length > 0 && restaurants.map((branch:IRestaurant, index) => (
              <Button
                onClick={()=>toggleRestaurant(index)}
                key={branch.id}
                variant="danger"
                className="px-16 mb-4"
              >
                {branch.name}
              </Button>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button
              onClick={toggleModal}
              variant="secondary"
              className="!px-16"
            >
              Skip
            </Button>
          </div>
        </Modal>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
