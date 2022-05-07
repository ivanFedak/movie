import {useState,useCallback} from 'react';
import queryString from 'query-string';
 
import configApi from "./configApi";
const {baseUrl,apiKey} = configApi;

const useHttp = () => {
    const [process,setProcess] = useState('idle');

    const request = useCallback(async (url,params)=>{
        setProcess('loading');
        const setting = baseUrl + url + '?api_key=' + apiKey + '&' + queryString.stringify(params);
        try{
            const response = await fetch(setting);
            const data =  await response.json();
            setProcess('idle');
            console.log(data);
            return data;
        }catch(e){
            setProcess('error');
            console.log(`Error in request in (httpHook) - error ${e}`);
            throw e;
        }
    },[])

    const clearError = useCallback(()=>{
        setProcess('loading');
    },[])

    return{request,clearError,process};

}
export default useHttp;