import { useFetchOwner } from '@/apis/owner';
import { RestaurantContextType } from '@/types';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const RestaurantContext = createContext<RestaurantContextType>({
    menus: [],
    setMenus: () => {},
    owner: null
});

export const useRestaurantContext = () => useContext(RestaurantContext);

const Restaurant: React.FC<any> = ({ children }) => {
  const [menus, setMenus] = useState<any>([]);
  const [owner, setOwner] = useState<any>({});
  
//   Fetch owner
  const {data:ownerData,isLoading}= useFetchOwner();

  useEffect(()=>{
    if(ownerData){
        setOwner(ownerData?.data?.supplier)
    }
  },[ownerData])

//   Memorized states
  const memorizedMenus = useMemo(()=> menus,[menus])
  const memorizedOwner = useMemo(()=>owner,[owner])

//   Context State
  const value = {
    menus:memorizedMenus,
    owner:memorizedOwner,
    setMenus,
  }
  return (
    <RestaurantContext.Provider value={value}>
        <div className='min-h-screen' >
            { isLoading ? 'LOADING...':children }
        </div>
    </RestaurantContext.Provider>
  );
};

export default React.memo(Restaurant)
