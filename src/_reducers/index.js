import { combineReducers } from 'redux';

import { pessoas } from './pessoas.reducer';
import { cursos } from './cursos.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  cursos,
  pessoas,
  alert
});

export default rootReducer;
