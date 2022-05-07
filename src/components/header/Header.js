
import {useRef,useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import './header.sass';

const paths = [
    {path: '/',
    display: 'Home'},

    {path: '/movie',
    display: 'Movies'},
    
    {path: '/tv',
    display: 'TV Series'},
];

const Header = () => {

    const headerRef = useRef(null);
    const {pathname} = useLocation();

    useEffect(() => {
        const shrinkHeader = () => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) headerRef.current.classList.add('shrink')
            else headerRef.current.classList.remove('shrink')
        }
        window.addEventListener('scroll',shrinkHeader)
        return () => {window.removeEventListener('scroll',shrinkHeader)}
    },[])

    const active = paths.findIndex(item => item.path === pathname);

    const nav = paths.map(({path,display},i) => (
        <li key={i} className={`${i === active ? 'active' : ''}`}>  
            <Link to={path}>{display}</Link>
        </li>
    ))

    return(
        <div ref={headerRef} className='header'>
            <div className='header__container _container'>
                <div className="header__logo logo">
                    <img src={logo} alt="logo"/>
                    <Link to="/">tMovies</Link>
                </div>
                <ul className="header__nav">
                    {nav}
                </ul>
            </div>
        </div>
    )
}

export default Header;