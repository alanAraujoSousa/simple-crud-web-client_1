import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pessoaActions } from '../_actions';
import { Link } from 'react-router-dom';
import { history } from '../_helpers';

function ListPessoas() {

    const pessoas = useSelector(state => state.pessoas);
    
    const dispatch = useDispatch();

    // fetch all Todos
    useEffect(() => { 
        dispatch(pessoaActions.list());
    }, []);
    
    function handleEdit(pessoa) {
        history.push(`/edit-pessoa?id=${pessoa._id}`);
    }

    function handleDelete(pessoa) {
        dispatch(pessoaActions.delete(pessoa._id));
    }

    return (
        <div>
            {/* <SmartDataTable data={pessoas.items} name='test-table' className='ui compact selectable table' /> */}
            {pessoas.items &&
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col"style={{width: '40%'}}>Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Telefone</th>
                            <th scope="col" style={{width: '15%'}}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {pessoas.items.map(
                        (pessoa, index) =>
                        <tr key={pessoa._id}>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.cpf}</td>
                            <td>{pessoa.telefone}</td>
                            <td>
                                <button className="btn btn-info mr-1" onClick={() => handleEdit(pessoa)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(pessoa)}>Delete</button>
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

export { ListPessoas };