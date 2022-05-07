import {lazy,Suspense} from "react";
import {Switch,Route} from "react-router-dom";

import Home from '../pages/Home';
import LoadingPage from "../service/loadingPage/LoadingPage";

const Detail = lazy(() => import('../pages/detail/Detail'));
const Catalog = lazy(() => import('../pages/Catalog'));
const Page404 = lazy(() => import('../service/errorPage/ErrorPage'));


const Routes = () => {

    return (
        <Suspense fallback={<LoadingPage/>}>
            <Switch>
                    <Route exact path="/:category/search/:keyword" component={Catalog}/>
                    <Route exact path="/:category/:id" component={Detail}/>
                    <Route exact path="/:category" component={Catalog}/>
                    <Route exact path="/" component={Home}/>
                    <Route component={Page404}/>
            </Switch>
        </Suspense>
    )
}
export default Routes;