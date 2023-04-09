
import { useFetchMenuCategories } from '@/apis/menu-categories';
import { useFetchMenuItems } from '@/apis/menu-items';
import Carousel from '@/components/Carousel';
import Collapse from '@/components/Collapse';
import Hero from '@/components/Hero';
import { LocationIcon, SearchIcon } from '@/components/Icons';
import Input from '@/components/Input';
import { cn } from '@/helpers/cn';
import { IProduct } from '@/types';
import React, {  useEffect, useState } from 'react';

const menus = [
  {
    name: 'Pancakes',
    id: 1,
    products: [
      { id: 1, name: 'Nutella Pie', calories: 216, price: 9 },
      { id: 2, name: 'Nutella Pie', calories: 216, price: 9 },
    ],
  },
  {
    name: 'Pizza',
    id: 2,
    products: [{ id: 1, name: 'Nutella Pie', calories: 216, price: 9 }],
  },
  {
    name: 'Drinks',
    id: 3,
    products: [{ id: 1, name: 'Nutella Pie', calories: 216, price: 9 }],
  },
];

const Tab = ({onClick, name, active}:any) => {
  return <div onClick={onClick} className={cn`min-w-max capitalize cursor-pointer border-b-2 mr-4 py-4 px-2 inline text-white hover:border-primary ${active ? 'border-primary': 'border-transparent'}`} >{name}</div>
}
interface IMenuProp extends IProduct {
  collapse?: boolean

}
const HomeContainer = () => {
  const { data, error, isLoading } = useFetchMenuCategories();
  const [menus, setMenus] = useState<IMenuProp[]>([]);

  useEffect(()=>{
    if(data){
      const newArr = data.map((item: IMenuProp, index:number)=>{
        return {
        ...item,
        collapse: index === 0 
        }
      })
      setMenus(newArr)
     }
  },[data])
  const handleOpen = (current: number) => {
    const newArr = menus.map((item: IMenuProp, index:number)=>{
      if(index === current) {
        return {...item, 
          collapse: !item.collapse
        }
      }
      return {...item}
    })
    setMenus(newArr)
  };
  return (
      <div className="min-h-screen bg-full-dark">
        <Hero className="" />
        <div className="p-4">
        <Input
            prefix={<SearchIcon className="absolute left-4 top-4" />}
            className="!py-0 pl-12 border-0 rounded-3xl h-12"
            placeholder="Search for menu item"
          />
          <div className="flex py-4 overflow-auto flex-nowrap custom-scrollbar " >
            {menus.length > 0 && menus.map((menu: any, index: number) => (<Tab key={menu.id} active={menu.collapse} onClick={()=>handleOpen(index)} name={menu.name} />))}
          </div>
          <Carousel />
          {!data && error ? <div className='text-white'>Failed to load menu categories</div>: !data ? <div className='text-white'>Loading</div> : 
          <>
            {menus.length > 0 && menus.map((menu: IMenuProp, index: number) => (
              <CollapseMenu menu={menu} active={menu.collapse} openIndex={menu.collapse} handleOpen={()=>handleOpen(index)} />
              ))}
            </>
            }
        </div>
      </div>
  );
};

const CollapseMenu: React.FC<any> = ({menu, active, handleOpen}) =>{
  const  {data, isLoading, error} = useFetchMenuItems(menu.id);
  return (
    <Collapse
      isLoading={isLoading}
      title={menu.name}
      quantity={data?.length}
      onOpen={handleOpen}
      products={data || []}
      active={active}
      error={error}
  />
  )
}

export default HomeContainer;
