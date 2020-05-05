import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    
    return (
        <div className="row d-flex justify-content-center" 
            style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}}>
            
            <div className="card text-right border-info m-2" style={{width: '18rem'}}>
                <div className="card-body">
                    <h4 className="card-title">Pessoas</h4>
                    <p className="card-text">Create, list, delete and update Pessoas</p>
                    <Link to="/pessoas" className="btn btn-primary mr-1">List</Link>
                    <Link to="/create-pessoa" className="btn btn-primary">Create</Link>
                </div>
            </div>
            <div className="card text-left border-info m-2" style={{width: '18rem'}}>
                <div className="card-body">
                    <h4 className="card-title">Cursos</h4>
                    <p className="card-text">Create, list, delete and update Cursos</p>
                    <Link to="/create-curso" className="btn btn-primary mr-1">Create</Link>
                    <Link to="/cursos" className="btn btn-primary">List</Link>
                </div>
            </div>
        </div>
    );    
}

export { Home };