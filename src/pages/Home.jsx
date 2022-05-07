
import {Link} from 'react-router-dom';

import useTmdbApi from '../api/tmdbApi';

import MainSlider from "../components/mainSlider/MainSlider";
import MovieList from '../components/movieList/MovieList';

import ErrorBoundary from '../service/errorBoundary/ErrorBoundary';
 
import {OutlineButton} from '../components/button/Button';

const Home = () => {

    const {category,movieType,tvType} = useTmdbApi();

    const sections = [
        {
            id: 1,
            label: 'Trending Movies',
            link: '/movie',
            type: movieType.popular,
            category: category.movie
        },
        {
            id: 2,
            label: 'Upcoming Movies',
            link: '/movie',
            type: movieType.upcoming,
            category: category.movie
        },
        {
            id: 3,
            label: 'Popular TV',
            link: '/tv',
            type: tvType.popular,
            category: category.tv
        },
        {
            id: 4,
            label: 'Top rated TV',
            link: '/tv',
            type: tvType.top_rated,
            category: category.tv
        },
    ]

    const renderSections = sections.map(item => (
        <div key={item.id} className="section">
            <div className="section__header">
                <div className="section__label">{item.label}</div>
                <Link to={item.link}>
                    <OutlineButton className="small">View More</OutlineButton>
                </Link>
            </div>
            <ErrorBoundary>
                <MovieList type={item.type} category={item.category}/>
            </ErrorBoundary>
        </div>
    ))

    return (
        <div>
            <ErrorBoundary>
                <MainSlider/>
            </ErrorBoundary>      
            {renderSections}
        </div>
    )
}

export default Home;
