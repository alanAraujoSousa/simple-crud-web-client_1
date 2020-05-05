import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { CreatePessoa } from '../Pessoas';
import { EditPessoa } from '../Pessoas';
import { ListPessoas } from '../Pessoas';
import { CreateCurso } from '../Cursos';
import { ListCursos } from '../Cursos';
import { Home } from '../Home';

function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, []);

    return (
        <div> 

            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }
            <div className='container' style={{margin: '5em'}}>

                <Router history={history}>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/pessoas" component={ListPessoas} />
                        <Route path="/create-pessoa" component={CreatePessoa} />
                        <Route path="/edit-pessoa" component={EditPessoa} />
                        <Route path="/cursos" component={ListCursos} />
                        <Route path="/create-curso" component={CreateCurso} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>            
        </div>
    );
}

export { App };