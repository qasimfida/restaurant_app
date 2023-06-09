import useSWR, { SWRConfiguration } from 'swr'
import https from '@/untils/axios'
import Cookies from 'js-cookie';
import { OwnerType } from '@/types';
export const OWNER_URL = `/auth/public-token?domain=`
export const fetchOwner = async([url, query]:string[]) => {
	try {
        const {data} = await https.get(`${url}${query}`);
        const token = data.data.accessToken
        Cookies.set('token', token)
        return data
    }catch(err){
        return err
    }
}

export const useFetchOwner = (config?: SWRConfiguration<OwnerType, Error>) => (
	useSWR([OWNER_URL,'nakheel1.dev.talabatmenu.com'], fetchOwner, config)
)