import useSWR, { SWRConfiguration } from 'swr'
import https from '@/untils/axios';
export const fetchMenuItem = async (url:any) => {
	try {
        const {data} = await https.get(`${url}`);
        return data.data;
    }catch(err){
        throw err
    }
}

export const useFetchMenuItem = (id: any, config?: SWRConfiguration<any[], Error>) => (
	useSWR(`/menu-item/${id}`, fetchMenuItem, config)
)