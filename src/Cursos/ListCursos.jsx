import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cursoActions } from '../_actions';
import { CreateCursos } from './CreateCurso';
import { Link } from 'react-router-dom';

function ListCursos() {

    const cursos = useSelector(state => state.cursos);
    
    const dispatch = useDispatch();

    // fetch all Todos
    useEffect(() => { 
        dispatch(cursoActions.list());
    }, []);

    function handleDelete(curso) {
        dispatch(cursoActions.delete(curso._id));
    }

    return (
        <div>
            {/* <SmartDataTable data={cursos.items} name='test-table' className='ui compact selectable table' /> */}
            {cursos.items &&
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"style={{width: '20%'}}>Matricula</th>
                            <th scope="col">Nome</th>
                            <th scope="col" style={{width: '15%'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cursos.items.map(
                        (curso, index) =>
                        <tr key={curso._id}>
                            <td>{curso._id}</td>
                            <td>{curso.nome}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(curso)}>Delete</button>
                            </td>
                        </tr>
                    )}      
                    </tbody>
                </table>
            }
            <Link to="/home" className="btn btn-link">Home</Link>
        </div>
    );
}

export { ListCursos };