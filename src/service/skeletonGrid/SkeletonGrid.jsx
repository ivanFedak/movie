
import './skeletonGrid.sass';

const Skeleton = () => {

    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


    const skeleton = arr.map(item => (
        <div key={item} className="skeleton-grid__item">
            <div className="skeleton-grid__img _ibg">
            </div>
            <div className="skeleton-grid__title"></div>
        </div>
    ))


    return (
        <div className='skeleton-grid'>
            <div className='skeleton-grid__container _container'>
                {skeleton}
            </div> 
        </div>
    )
}

export default Skeleton