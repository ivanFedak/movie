
import {useState,useEffect,useRef} from "react";

import useTmdbApi from '../../api/tmdbApi';

const VideoList = ({category,id}) => {

    const {getVideos} = useTmdbApi();
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        getVideo();
    //eslint-disable-next-line
    },[category,id])

    const getVideo = () => {
        getVideos(category,id)
            .then(res => setVideoList(res.results.slice(0,3)))
            .catch(e => console.log(`Error in fetch (VideoList), error - ${e}`))
    }

    if(!videoList) return <h3>Loading...</h3>

    
    return (<>{videoList.map(item => <Video item={item} key={item.id}/>)}</>)
}

const Video = ({item}) => {

    const videoRef = useRef(null)

    return(
        <div className="video">
            <iframe className="video__iframe" src={`https://www.youtube.com/embed/${item.key}`} 
                    ref={videoRef} title="video" allow="fullscreen"/>
            <h2 className="video__title">{item.name}</h2>
        </div>
    )

}

export default VideoList;