
import {useParams} from "react-router-dom";

import PageHeader from "../components/pageHeader/PageHeader";
import MovieGrid from "../components/movieGrid/MovieGrid";

import ErrorBoundary from "../service/errorBoundary/ErrorBoundary";

const Catalog = () => {

    const {category} = useParams();

    return (
        <div>
            <PageHeader>
                {category === 'movie' ? 'Movie' : 'TV'}
            </PageHeader>
            <ErrorBoundary>
                <MovieGrid category={category}/>
            </ErrorBoundary>
        </div>
    )
}

export default Catalog;