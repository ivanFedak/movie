
import bg from '../../assets/img/footer-bg.jpg';

import './pageHeader.sass';

const PageHeader = (props) => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <div className="page-header__container _container">
                <h2 className='page-header__text'>{props.children}</h2>
            </div>
        </div>
    )
}

export default PageHeader;