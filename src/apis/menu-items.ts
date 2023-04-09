import useSWR, { SWRConfiguration } from 'swr'
import https from '@/untils/axios';
export const fetchMenuItems = async (url:string[]) => {
	try {
        const {data} = await https.get(`${url}`);
        return data.data.docs;
    }catch(err){
        throw err
    }
}

export const useFetchMenuItems = (id: number, config?: SWRConfiguration<any[], Error>) => (
	useSWR(`/menu-item?categoryId=${id}&page=1&limit=10&pagination=true&sortBy=_id&sortDirection=-1`, fetchMenuItems, config)
)