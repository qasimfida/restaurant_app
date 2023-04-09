import useSWR, { SWRConfiguration } from 'swr'
import https from '@/untils/axios';
export const fetchMenuAddition = async (url:string[]) => {
	try {
        const {data} = await https.get(`${url}`);
        return data
    }catch(err){
        throw err
    }
}

export const useFetchMenuAddition = (id:string, config?: SWRConfiguration<any[], Error>) => (
	useSWR(`/menu-addition/${id}`, fetchMenuAddition, config)
)   