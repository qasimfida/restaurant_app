import useSWR, { SWRConfiguration } from 'swr'
import https from '@/untils/axios';

export const MENU_CATEGORY_API = '/menu-category?page=1&limit=9990&pagination=true&sortBy=_id&sortDirection=-1'
export const fetchMenuCategories = async (url:string) => {
	try {
        const {data} = await https.get(`${url}`);
        return data.data.docs
    } catch(err){
        throw err
    }
}

export const useFetchMenuCategories = (config?: SWRConfiguration<any, Error>) => (
	useSWR(MENU_CATEGORY_API, fetchMenuCategories, config)
)   