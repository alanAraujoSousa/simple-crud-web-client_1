import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { cursoActions } from '../_actions';

function CreateCursos() {

    const [curso, setCurso] = useState({
        _id: '',
        nome: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const creating = useSelector(state => state.cursos.creating)

    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setCurso(curso => ({ ...curso, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (curso.nome && curso._id) {
            dispatch(cursoActions.create(curso));
        }
    }

    return (
        <div>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Matricula*</label>
                    <input type="number" name="_id" value={curso._id} onChange={handleChange} 
                        className={"form-control" + (submitted && !curso._id ? 'is-invalid': '')} />

                    {submitted && !curso._id &&
                        <div className="invalid-feedback">The matricula is required</div>
                    }
                </div>
                
                <div className="form-group">
                    <label>Nome*</label>
                    <input type="text" name="nome" value={curso.nome} onChange={handleChange} 
                        className={"form-control" + (submitted && !curso.nome ? 'is-invalid': '')} />

                    {submitted && !curso.nome &&
                        <div className="invalid-feedback">The nome is required</div>
                    }
                </div>
                
                <div className="form-group">
                    <button disabled={ !curso.nome || !curso._id} className="btn btn-primary">
                        {creating && <span className="spinner-border spinner-border-sm mr-1"></span>}                        
                        Create
                    </button>
                    <Link to="/home" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export { CreateCursos };