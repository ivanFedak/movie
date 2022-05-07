
import {useState,useEffect, useCallback} from 'react';
import {useParams,useHistory} from 'react-router-dom';

import useTmdbApi from '../../api/tmdbApi';

import MovieCard from '../movieCard/MovieCard';
import Input from '../input/Input';
import Button,{OutlineButton} from '../button/Button';

import Skeleton from '../../service/skeletonGrid/SkeletonGrid';
import ErrorMessage from '../../service/errorMessage/ErrorMessage';

import './movieGrid.sass';

const MovieGrid = (props) => {

    const [items,setItems] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPage,setTotalPage] = useState(0);
    const {keyword} = useParams();
    const {category,movieType,tvType,process,getMovieList,getTvList,search,config} = useTmdbApi();

    useEffect(() => {
        getGrid();
        window.scrollTo(0,0);

        config()
            .then(res => console.log(res))
        //eslint-disable-next-line
    },[props.category,keyword])

    const getGrid = async () => {
        let response = null;
        if(keyword === undefined){
            switch(props.category){
                case category.movie:
                    response = await getMovieList(movieType.popular);
                    break;
                default:
                    response = await getTvList(tvType.popular);
            }
        }else{
            const params = {query: keyword};
            response = await search(props.category,params);
        }
        setPage(1);
        setItems(response.results);
        setTotalPage(response.total_pages);
    }

    const loadMore = async () => {
        let response = null;
        if(keyword === undefined){
            const params = {page: page + 1};
            switch(props.category){
                case category.movie:
                    response = await getMovieList(movieType.popular,params);
                    break;
                default:
                    response = await getTvList(tvType.popular,params);
            }
        }else{
            const params = {query: keyword,page: page + 1};
            response = await search(props.category,params);
        }
        setItems([...items,...response.results]);
        setPage(page + 1);
    }

    if(process === 'loading') return <Skeleton/>
    else if(process === 'error') return <ErrorMessage/>

    return (
        <div className='movie-grid'>
            <div className="movie-grid__container _container">
                <SearchItems keyword={keyword} category={props.category}/>
                <div className="movie-grid__content">
                    {items.map(item => <MovieCard item={item} cate={props.category} key={item.id}/>)}
                </div>
                {page < totalPage ?(
                    <div className='movie-grid__loadmore'>
                        <OutlineButton className="small" onClick={loadMore}>Load more</OutlineButton>
                    </div>
                ) : null}      
            </div>
        </div>
    )
}

const SearchItems = (props) => {

    const [keyword, setKeyword] = useState(props.keyword ? props.keyword : '');
    const history = useHistory();

    const goToSearch = useCallback(() => {
        if(keyword.trim().length > 0) history.push(`/${props.category}/search/${keyword}`)
    },[keyword,props.category,history]); //useCallback if we make the same search to not upload content


    useEffect(() => {
        const enter = e => {
            e.preventDefault();
            if(e.keyCode === 13) goToSearch();
        }
        document.addEventListener('keyup',enter)
        return () => {document.removeEventListener('keyup',enter)}
    },[keyword,goToSearch])

    return(
        <div className='movie-grid__form'>
            <Input type='text' value={keyword} placeholder='enter here' onChange={(e) => setKeyword(e.target.value)}/>
            <Button onClick={() => goToSearch()}>Search</Button>
        </div>
    )
}

export default MovieGrid;