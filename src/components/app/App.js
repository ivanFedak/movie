
import {BrowserRouter} from 'react-router-dom';

import Header from '../header/Header';
import Routes from '../../config/Routes';
import Footer from '../footer/Footer';

import 'swiper/swiper.min.css';
import '../../assets/boxicons-2.0.7/css/boxicons.min.css';
import './app.sass';

const App = () => {

    return(
        <BrowserRouter>
            <Header/>
            <main className="page">
                <Routes/>
            </main>
            <Footer/>
        </BrowserRouter>
    )
}
export default App;
// End