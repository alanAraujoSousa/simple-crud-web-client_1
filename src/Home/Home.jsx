import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    
    return (
        <div className="row d-flex justify-content-center">
            
            <div className="card text-right border-info m-2" style={{width: '18rem'}}>
                <div className="card-body">
                    <h4 className="card-title">Pessoas</h4>
                    <p className="card-text">Create, list, delete and update Pessoas</p>
                    <Link to="/pessoas" className="btn btn-primary">Access</Link>
                </div>
            </div>
            <div className="card text-left border-info m-2" style={{width: '18rem'}}>
                <div className="card-body">
                    <h4 className="card-title">Cursos</h4>
                    <p className="card-text">Create, list, delete and update Cursos</p>
                    <Link to="/cursos" className="btn btn-primary">Access</Link>
                </div>
            </div>
        </div>
    );    
}

export { Home };