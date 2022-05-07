
import {Link} from 'react-router-dom';
import configApi from '../../api/configApi';
import Button from '../button/Button';
import './movieCard.sass';

const MovieCard = ({item,cate}) => {

    const {title,name,poster_path,backdrop_path} = item;
    const bg = configApi.w780image(poster_path ? poster_path : backdrop_path);

    const link = '/' + cate + '/' + item.id
    
    return (
        <Link to={link}>
            <div className="movie-card">
                <div className="movie-card__img _ibg">
                    <img src={bg} alt={title || name}/>
                </div>
                <Button>
                    <i className='bx bx-play'></i>
                </Button>
                <h3 className="movie-card__info">{title || name}</h3>
            </div>
        </Link>
    )
}

export default MovieCard;