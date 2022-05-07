
import {useState,useEffect} from "react";
import {Swiper,SwiperSlide} from "swiper/react";

import useTmbdApi from '../../api/tmdbApi';

import Skeleton from "../../service/skeletonList/SkeletonList";
import MovieCard from "../movieCard/MovieCard";

import './movieList.sass';

const MovieList =  (props) => {

    const [movieList, setMovieList] = useState([]);
    const {category,process,getMovieList,getTvList,similar} = useTmbdApi();

    useEffect(() => {
        getList();
        window.scrollTo(0,0);
    //eslint-disable-next-line
    },[])

    const getList = async () => {
        let response = null;
        if(props.type !== 'similar'){
            switch (props.category){
                case category.movie:
                    response = await getMovieList(props.type);
                    break;
                default:
                    response = await getTvList(props.type);
            }
        }else{
            response = await similar(props.category,props.id)
        }
        setMovieList(response.results);
    }

    if(process === 'loading') return <Skeleton/>

    const renderList = movieList.map(item => (
        <SwiperSlide key={item.id}>
            <MovieCard item={item} cate={props.category}/>
        </SwiperSlide>
    ))

    return(
        <div className="movie-list">
            <Swiper grabCursor slidesPerView={"auto"} spaceBetween={10}>
                {renderList}
            </Swiper>
        </div>
    )
}

export default MovieList;