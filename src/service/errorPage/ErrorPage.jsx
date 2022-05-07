
import {Link} from 'react-router-dom';

import {OutlineButton} from '../../components/button/Button';

import bg from '../../assets/img/bgError.jpeg';
import lego from '../../assets/img/lego.png';
import './errorPage.sass';

const ErrorPage = () => {
    return (
        <div className='issue' style={{backgroundImage: `url(${bg})`}}>
            <div className="issue__container _container">
                <img src={lego} alt="lego"/>
                <div className="issue__content">
                    <h2 className='issue__title'>404</h2>
                    <div className="issue__text">Sorry, we can't find that page! Don't worry though, everything is STILL AWESOME!</div>
                    <Link to='/'>
                        <OutlineButton>Main Page</OutlineButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage