import React from 'react';
import{Link} from 'react-router-dom';
import imagenFondo from '../assets/images/error-star-wars.jpg';

const Error = () => {
    return (
        <div>
             <h1 className="d-flex align-items-center justify-content-center text-black mb-3">Error 404: No se encuentra la página</h1>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 bg-image" style={{width: 100 +'%'}} src={imagenFondo} alt=" Star Wars"/>
            <Link className="d-flex align-items-center justify-content-center " to="/">Volver a la página principal</Link>
        </div>
    );
}

export default Error;
