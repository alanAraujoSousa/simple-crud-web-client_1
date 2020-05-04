import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { pessoaActions } from '../_actions';

function CreatePessoas() {

    const [pessoa, setPessoa] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        cursos: []
    });
    const [submitted, setSubmitted] = useState(false);

    const creating = useSelector(state => state.pessoas.creating);
    const cursos = useSelector(state => state.cursos);

    const dispatch = useDispatch();

    function handleChange(e) {
        const { name, value } = e.target;
        setPessoa(pessoa => ({ ...pessoa, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (pessoa.nome && pessoa.cpf && pessoa.telefone) {
            dispatch(pessoaActions.create(pessoa));
        }
    }

    function toggleChecked() {
        
    }

    return (
        <div>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" name="nome" value={nome} onChange={handleChange} 
                        className={"form-control" + (submitted && !nome ? 'is-invalid': '')} />

                    {submitted && !nome &&
                        <div className="invalid-feedback">The nome is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>CPF</label>
                    <input type="text" name="cpf" value={cpf} onChange={handleChange} 
                        className={"form-control" + (submitted && !cpf ? 'is-invalid': '')} />

                    {submitted && !cpf &&
                        <div className="invalid-feedback">The CPF is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <input type="text" name="telefone" value={telefone} onChange={handleChange}
                        className="form-control"/>
                </div>

                {cursos.items &&
                    <div className="form-check">
                        <label>Cursos</label>
                        {cursos.items.map(
                            (todo, index) => 
                            {}
                        )}
                    </div>
                }

                <div className="form-group">
                    <button disabled={ !pessoa.nome || !pessoa.cpf || creating} className="btn btn-primary">
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

export { Pessoas };