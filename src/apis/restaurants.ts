import useSWR, { SWRConfiguration } from 'swr'
import https from '@/untils/axios';
export const fetchRestaurants = async (url:string[]) => {
	try {
        const {data} = await https.get(`${url}`);
        return data.data.docs
    }catch(err){
        throw err
    }
}

export const useFetchRestaurants = (config?: SWRConfiguration<any, Error>) => (
	useSWR('/restaurant?page=1&limit=10&pagination=true&sortBy=_id&sortDirection=-1', fetchRestaurants, config)
)