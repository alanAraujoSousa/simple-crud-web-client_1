import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { cursoActions } from '../_actions';

function Cursos() {

    const [curso, setCurso] = useState({
        id: '',
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
        if (cursp.nome && curso.id) {
            dispatch(cursoActions.create(curso));
        }
    }

    return (
        <div>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Matricula</label>
                    <input type="text" name="id" value={id} onChange={handleChange} 
                        className={"form-control" + (submitted && !id ? 'is-invalid': '')} />

                    {submitted && !id &&
                        <div className="invalid-feedback">The matricula is required</div>
                    }
                </div>
                
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" name="nome" value={nome} onChange={handleChange} 
                        className={"form-control" + (submitted && !nome ? 'is-invalid': '')} />

                    {submitted && !nome &&
                        <div className="invalid-feedback">The nome is required</div>
                    }
                </div>
                
                <div className="form-group">
                    <button disabled={ !pessoa.nome || !pessoa.id || creating} className="btn btn-primary">
                        {creating 
                            ? <span className="spinner-border spinner-border-sm mr-1"></span> + Creating
                            : Create
                        }
                    </button>
                </div>
            </form>
        </div>
    );
}

export { Cursos };