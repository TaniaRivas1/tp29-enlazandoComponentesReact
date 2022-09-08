import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import {Routes, Route} from 'react-router-dom'
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Chart from './Chart';
import ContentRowMovies from './ContentRowMovies';
import Error from './Error'

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />

                    <Routes>
                        <Route path='/' element={<ContentRowTop />} />
                        <Route path='/movies' element={<LastMovieInDb />} />
                        <Route path='/genres' element={<GenresInDb />} />
                        <Route path='/charts' element={<ContentRowMovies />} />
                        <Route path='/tables' element={<Chart />} />
                        <Route path='*' element={<Error/>} />
                    </Routes>
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;