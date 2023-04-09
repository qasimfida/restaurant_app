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
    id?:number | string
  }
export interface MenuItem {
    _id?: string;
    supplierId?: string;
    restaurantId?: string | null;
    categoryId?: string;
    name?: string;
    nameAr?: string;
    description?: string;
    descriptionAr?: string;
    price?: number;
    cost?: number;
    taxEnabled?: boolean;
    priceInStar?: number;
    starGain?: number;
    order?: number;
    calories?: number;
    image?: string;
    alergies?: string[];
    soldOut?: boolean;
    additions?: Addition[];
  }
  
  export interface Addition {
    _id?: string;
    supplierId?: string;
    name?: string;
    nameAr?: string;
    isMultipleAllowed?: boolean;
    options?: Option[];
    maxOptions?: number | null;
    minOptions?: number | null;
    freeOptions?: number | null;
    order?: number;
    taxEnabled?: boolean;
    active?: boolean;
  }
  
  export interface Option {
    name?: string;
    nameAr?: string;
    price?: number;
    order?: number;
    calory?: number;
    active?: boolean;
    _id?: string;
  }
  
  export interface Quantity {
    name?: string;
    quantity?: number;
  }

  export interface Owner {
    _id?: string;
    name?: string;
    nameAr?: string;
    about?: string;
    aboutAr?: string;
    vatNumber?: string;
    email?: string;
    phoneNumber?: string;
    logo?: string;
    backgroundImage?: string;
    twitter?: string;
    instagram?: string;
    snapchat?: string;
    tiktok?: string;
    whatsapp?: string;
    domain?: string;
    restaurant?: boolean;
    active?: boolean;
  }

  export interface MenuItem {
    id?: string;
    name?: string;
    nameAr?: string;
    image?: string;
    order?: number;
    active?: boolean;
    addedBy?: string;
    supplierId?: string;
  }
  

  export interface IRestaurant {
    supplierId?: string;
    name?: string;
    nameAr?: string;
    active?: boolean;
    id?: string;
  }
  
  
  