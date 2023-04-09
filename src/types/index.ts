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
    waiterCode?: string;
    alergies?: string[];
    suggestedItems?: string[];
    hideFromMenu?: string[];
    soldOut?: boolean;
    manageQuantity?: boolean;
    canBuyWithStars?: boolean;
    additions?: Addition[];
    sticker?: string;
    stickerStyle?: string[];
    active?: boolean;
    deletedAt?: Date | null;
    preparationTime?: number;
    addedBy?: string;
    quantities?: Quantity[];
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
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
    deletedAt?: Date | null;
    addedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
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
    crDoc?: string;
    mancucpilityCertDoc?: string;
    incorporationContractDoc?: string;
    IbanCertDoc?: string | null;
    IdDoc?: string | null;
    deletedAt?: string | null;
    active?: boolean;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
    ibanCertDoc?: string;
    idDoc?: string;
    reservationFee?: number;
    taxEnabled?: boolean;
    taxEnabledOnReservationFee?: boolean;
    taxEnabledOnTableFee?: boolean;
    taxRate?: number;
    defaultWorkingHours?: {
      start?: string;
      end?: string;
    };
    isDeliveryEnabled?: boolean;
    isDeliveryToCarEnabled?: boolean;
    isMenuBrowsingEnabled?: boolean;
    isPickupOrderEnabled?: boolean;
    isScheduledOrderEnabled?: boolean;
    overrideWorkingHours?: {
      day?: string;
      start?: string;
      end?: string;
    }[];
    isAppOrderEnabled?: boolean;
    isReservationEnabled?: boolean;
    isWaitingEnabled?: boolean;
    alias?: string;
    timezone?: string;
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
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
  }
  

  export interface IRestaurant {
    _id?: string;
    supplierId?: string;
    name?: string;
    nameAr?: string;
    city?: string;
    whatsappNumber?: string;
    enableWhatsappCommunication?: boolean;
    beforeConfirmOrderMessage?: {
      ar?: string;
      en?: string;
    };
    defaultWorkingHours?: {
      start?: string;
      end?: string;
    };
    overrideWorkingHours?: Array<unknown>;
    isMenuBrowsingEnabled?: boolean;
    isAppOrderEnabled?: boolean;
    isDeliveryEnabled?: boolean;
    isPickupOrderEnabled?: boolean;
    isScheduledOrderEnabled?: boolean;
    isDeliveryToCarEnabled?: boolean;
    isReservationEnabled?: boolean;
    isWaitingEnabled?: boolean;
    minimumDeliveryOrderValue?: number;
    location?: {
      country?: string;
      address?: string;
      city?: string;
      state?: string;
      district?: string;
      zipCode?: number;
    };
    active?: boolean;
    terms?: Array<{
      type?: string;
      termsAr?: string;
      termsEn?: string;
    }>;
    deletedAt?: Date | null;
    addedBy?: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?: number;
    id?: string;
  }
  
  
  