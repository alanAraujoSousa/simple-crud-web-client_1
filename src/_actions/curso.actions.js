import { cursoConstants } from "../_constants";
import { cursoService } from "../_services";
import { alertActions } from "./";

export const cursoActions = {
    create,
    list,
    get,
    update,
    delete: _delete
}

function create(curso) {
    return dispatch => {
        dispatch(request(curso));

        cursoService.create(curso)
            .then(
                curso => {
                    dispatch(success(curso));
                    dispatch(alertActions.success("You have succesfuly created a curso"));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    }

    function request(curso) { return { type: cursoConstants.CREATE_REQUEST, curso } }
    function success(curso) { return { type: cursoConstants.CREATE_SUCCESS, curso } }
    function failure(error) { return { type: cursoConstants.CREATE_FAILURE, error } }
}

function list() {
    return dispatch => {
        dispatch(request());

        cursoService.list()
            .then(
                cursos => dispatch(success(cursos)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: cursoConstants.LIST_REQUEST } }
    function success(cursos) { return { type: cursoConstants.LIST_SUCCESS, cursos } }
    function failure(error) { return { type: cursoConstants.LIST_FAILURE, error } }
}

function get(id) {
    return dispatch => {
        dispatch(request(id));

        cursoService.get(id)
            .then(
                curso => dispatch(success(curso)),
                error => dispatch(failure(id, error.toString()))
            );
    }

    function request(id) { return { type: cursoConstants.GET_REQUEST, id } };
    function success(curso) { return { type: cursoConstants.GET_SUCCESS, curso } };
    function failure(id) { return { type: cursoConstants.GET_FAILURE, id, error } };
}

function update(id, curso) {
    return dispatch => {
        dispatch(request(id, curso));

        cursoService.update(id, curso)
            .then(
                curso => { 
                    dispatch(alertActions.success("You have succesfuly updated a Curso"));
                    dispatch(success(id));
                },
                error => dispatch(failure(id, error.toString()))
            );
    }

    function request(id) { return { type: cursoConstants.UPDATE_REQUEST, id } }
    function success(id) { return { type: cursoConstants.UPDATE_SUCCESS, id } }
    function failure(id, error) { return { type: cursoConstants.UPDATE_FAILURE, id, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        cursoService.delete(id)
            .then(
                curso => {
                    dispatch(success(id));
                    dispatch(alertActions.success("You have succesfuly deleted a curso"));
                },
                error => {
                    dispatch(failure(id, error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(id) { return { type: cursoConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: cursoConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: cursoConstants.DELETE_FAILURE, id, error } }
}