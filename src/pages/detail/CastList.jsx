
import {useState,useEffect} from 'react';

import useTmdbApi from '../../api/tmdbApi';
import configApi from '../../api/configApi';

const CastList = ({category,id}) => {

    const {credits} = useTmdbApi();
    const [castList,setCastList] = useState([]);

    useEffect(()=>{
        getCast();
    //eslint-disable-next-line
    },[category,id])

    const getCast = () => {
        credits(category,id)
            .then(res => setCastList(res.cast.slice(0,5)))
            .catch(e => console.log(`Error in fetch (CastList), error - ${e}`))
    }



    return (<>
        {castList.map(item => (
            <div key={item.id} className='cast-detail__item'>
                <div className="cast-detail__img _ibg">
                    <img src={configApi.w780image(item.profile_path)} alt="cast"/>
                </div>
                <h3 className="cast-detail__name">{item.name}</h3>
            </div>
        ))}
    </>)
}

export default CastList;