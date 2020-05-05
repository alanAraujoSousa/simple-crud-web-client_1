import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import { cursoService } from '../_services';
import { pessoaActions } from '../_actions';
import { cursoActions } from '../_actions';

function CreatePessoas() {

    const [pessoa, setPessoa] = useState({
        nome: '',
        cpf: '',
        telefone: '',
        cursos: []
    });
    const [submitted, setSubmitted] = useState(false);
    const [cursos, setCursos] = useState([]);

    const creating = useSelector(state => state.pessoas.creating);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        cursoService.list()
        .then(
            data => { 
                    let cursos = [];
                    data.map(d => {
                        cursos.push({label: d.nome, value: d._id});
                    });
                    setCursos(cursos);
                },
                error => {}
            );
    }, []);

    function handleChange(e) {
        const { name, value } = e.target;
        setPessoa(pessoa => ({ ...pessoa, [name]: value }))
    }

    function handleSelectChange(cursosSelected) {
        setPessoa(pessoa => ({ ...pessoa, cursos: cursosSelected.map(c => c.value)}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSubmitted(true);
        if (pessoa.nome && pessoa.cpf && pessoa.telefone) {
            dispatch(pessoaActions.create(pessoa));
        }
    }

    return (
        <div>
            <form name="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Nome*</label>
                    <input type="text" name="nome" value={pessoa.nome} onChange={handleChange} 
                        className={"form-control" + (submitted && !pessoa.nome ? 'is-invalid': '')} />

                    {submitted && !pessoa.nome &&
                        <div className="invalid-feedback">The nome is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>CPF*</label>
                    <InputMask mask="999.999.999-99" alwaysShowMask name="cpf" value={pessoa.cpf} onChange={handleChange} 
                        className={"form-control" + (submitted && !pessoa.cpf ? 'is-invalid': '')} />

                    {submitted && !pessoa.cpf &&
                        <div className="invalid-feedback">The CPF is required</div>
                    }
                </div>
                <div className="form-group">
                    <label>Telefone</label>
                    <InputMask mask="(999)99999-9999" alwaysShowMask name="telefone" value={pessoa.telefone} onChange={handleChange}
                        className="form-control"/>
                </div>

                {cursos &&
                <div className="form-group">
                    <label>Cursos</label>
                    <Select closeMenuOnSelect={false} className="basic-multi-select" isMulti options={cursos} 
                        onChange={handleSelectChange} />
                </div>
                }

                <div className="form-group">
                    <button disabled={ !pessoa.nome || !pessoa.cpf } className="btn btn-primary">
                        {creating && <span className="spinner-border spinner-border-sm mr-1"></span>}                        
                            Create
                    </button>
                    <Link to="/home" className="btn btn-link">Cancel</Link>
                </div>
            </form>
        </div>
    );
}

export { CreatePessoas };