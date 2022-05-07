
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

import useTmdbApi from '../../api/tmdbApi';
import configApi from "../../api/configApi";

import CastList from "./CastList";
import VideoList from "./VideoList";
import MovieList from '../../components/movieList/MovieList';

import LoadingPage from '../../service/loadingPage/LoadingPage';

import './detail.sass';

const Detail = () => {

    const {detail} = useTmdbApi();
    const [item,setItem] = useState(null);
    const {category,id} = useParams();

    useEffect(() => {
        getItem();
    //eslint-disable-next-line
    },[category,id])

    const getItem = () => {
        detail(category,id)
            .then(res => setItem(res))
            .catch(e => console.log(`Error in fetch (Detail), error - ${e}`));
        window.scrollTo(0,0);
    }

    if(!item) return <LoadingPage/>

    const {title,name,overview,genres,poster_path,backdrop_path} = item;

    const bg = configApi.originalImage(backdrop_path ? backdrop_path : poster_path);
    const poster = configApi.w780image(poster_path ? poster_path : backdrop_path);

    return (
        <div className="detail">
            <div className="detail__background _ibg">
                <img src={bg} alt={title}/>
            </div>
            <div className="detail__container _container">
                <div className="detail__poster">
                    <img src={poster} alt={title}/>
                </div>
                <div className="detail__content">
                    <h2 className="detail__name">{title || name}</h2>
                    <div className="detail__genres">
                        {genres.slice(0,3).map(item =><div key={item.id}>{item.name}</div>)}
                    </div>
                    <div className="detail__decr">{overview}</div>

                    <div className="detail__cast cast-detail">
                        <h2 className="cast-detail__title">Casts</h2>
                        <div className="cast-detail__container">
                            <CastList category={category} id={id}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="detail__video video-detail _container">
                <h2 className="video-detail__title">Video from Youtube</h2>
                <div className="video-detail__container">
                    <VideoList category={category} id={item.id}/>
                </div> 
            </div>


            <div className="detail__similar similar-detail _container">
                <h2 className="similar-detail__title">Similar</h2>
                <div className="similar-detail__container">
                    <MovieList type="similar" category={category} id={item.id}/>
                </div> 
            </div>


        </div>
    )
}

export default Detail;