
import {useState,useEffect, useRef} from 'react';
import {useHistory} from 'react-router-dom/';

import SwiperCore,{Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import useTmdbApi from '../../api/tmdbApi';
import configApi from '../../api/configApi';

import Modal,{ModalContent} from '../modal/Modal';
import Button,{OutlineButton} from '../button/Button';

import './mainSlider.sass';

const MainSlider = () => {
    
    SwiperCore.use([Autoplay]);

    const [items,setItems] = useState([]);

    const {movieType,getMovieList} = useTmdbApi();
    
    useEffect(() => {
        getItems();
        window.scrollTo(0,0);
    //eslint-disable-next-line
    },[])

    const getItems = () => {
        getMovieList(movieType.popular)
            .then(res => setItems(res.results.slice(0,3)))
            .catch(e => console.log(`Error in fetch (MainSlide), error - ${e}`))
    }
    


    const renderSlide = items.map(item => (
        <SwiperSlide key={item.id}>
            {({isActive}) => <SliderItem item={item} className={`${isActive ? 'active' : ''}`}/>}
        </SwiperSlide>
    ))

    return (
        <div className="main-slider">
            <Swiper modules={[Autoplay]} grabCursor spaceBetween={0} slidesPerView={1}> {/*autoplay={{delay: 3000}}*/}
                {renderSlide}
            </Swiper>
            {items.map(item => <TrailerModal item={item} key={item.id}/>)}
        </div>
    )
}


const SliderItem = ({item,className}) => {

    const history = useHistory();
    const {category,getVideos} = useTmdbApi();
    const {id,title,overview,backdrop_path,poster_path} = item;
    const bg = configApi.originalImage(backdrop_path ? backdrop_path : poster_path);
    const poster = configApi.w780image(poster_path ? poster_path : backdrop_path);


    const setModalActive = async () => {
        const modal = document.querySelector(`#modal_${id}`)
        const videos = await getVideos(category.movie,id)
        if(videos.results.length > 0){
            const videoSrc = `https://www.youtube.com/embed/` + videos.results[0].key;
            modal.querySelector('.modal__content > iframe').setAttribute('src', videoSrc) 
        }else{
            modal.querySelector('.modal__content > iframe').innerHTML = 'No trailer'
        }
        modal.classList.toggle('active');
    }


    return(
        <div className={`main-slider__item ${className}`} style={{backgroundImage:`url(${bg})`}}>
            <div className="main-slider__container">
                <div className="main-slider__content">
                    <div className="main-slider__title">{title}</div>
                    <div className="main-slider__overview">{overview.slice(0,200)}...</div>
                    <div className="main-slider__btns">
                        <Button onClick={() => history.push(`/movie/${id}`)}>Watch now</Button>
                        <OutlineButton onClick={setModalActive}>Watch trailer</OutlineButton>
                    </div>
                </div>
                <div className="main-slider__poster">
                    <img src={poster} alt="poster"/>
                </div>
            </div>
        </div>
    )
}

const TrailerModal = ({item}) => {

    const iframeRef = useRef(null)

    const onClose = () => iframeRef.current.setAttribute('src', '');

    return(
        <Modal id={`modal_${item.id}`} active={false}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width='100%' title='trailer' className="modal__iframe"></iframe>
            </ModalContent>
        </Modal>
    )


}

export default MainSlider;