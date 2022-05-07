
import useHttp from "./httpHook";

const useTmdbApi = () => {

    const {request,process} = useHttp();

    
    const category = {
        movie: 'movie',
        tv: 'tv'
    }
    const movieType = {
        popular: 'popular',
        top_rate: 'top_rate',
        upcoming: 'upcoming'
    }
    const tvType = {
        popular: 'popular',
        top_rated: 'top_rated',
        on_the_air: 'on_the_air'
    }


    const getMovieList = (type,params) => {
        const url = 'movie/' + movieType[type];
        return request(url,params);
    };
    const getTvList = (type,params) => {
        const url = 'tv/' + tvType[type];
        return request(url,params);
    }
    const getVideos = (cate,id) => {
        const url = category[cate] + '/' + id + '/videos';
        return request(url);
    }
    const search = (cate,params) => {
        const url = 'search/' + category[cate];
        return request(url,params);
    }
    const detail = (cate,id) => {
        const url = category[cate] + '/' + id;
        return request(url);
    }
    const credits = (cate,id) => {
        const url = category[cate] + '/' + id + '/credits';
        return request(url);
    }
    const similar = (cate,id) => {
        const url = category[cate] + '/' + id + '/similar';
        return request(url);
    }
    const config = () => {
        const url = '/configuration';
        return request(url);
    }
    return{category,movieType,tvType,process,getMovieList,getTvList,getVideos,search,detail,credits,similar,config};
};

export default useTmdbApi;
