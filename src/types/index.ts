export interface RestaurantContextType {
    menus: any;
    setMenus: React.Dispatch<React.SetStateAction<any>>;
    owner: any;
}
export interface OwnerType {
	
}
export interface IProduct {
    image?: string | null,
    name?: string | null,
    price?: number | string
    calories?: number | undefined,
    description?: string | undefined
    additions?: any
  }