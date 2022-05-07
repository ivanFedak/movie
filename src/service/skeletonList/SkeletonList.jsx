
import './skeletonList.sass';

const Skeleton = () => {

    const arr = [1,2,3,4,5,6,7,8,9];


    const skeleton = arr.map(item => (
        <div key={item} className="skeleton__item">
            <div className="skeleton__img _ibg">
            </div>
            <div className="skeleton__title"></div>
        </div>
    ))


    return (
        <div className='skeleton'>
            {skeleton}
        </div>
    )
}

export default Skeleton