import React, { useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { CreatePessoas } from '../Pessoas';
import { ListPessoas } from '../Pessoas';
import { CreateCursos } from '../Cursos';
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
        <div className='container'> 

            {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
            }

            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/pessoas" component={ListPessoas} />
                    <Route path="/create-pessoas" component={CreatePessoas} />
                    {/* <Route path="/pessoas/:id/edit" component={EditPessoas} /> */}
                    <Route path="/cursos" component={ListCursos} />
                    <Route path="/create-cursos" component={CreateCursos} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
            
        </div>
    );
}

export { App };