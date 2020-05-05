import { pessoaConstants } from "../_constants";
import { pessoaService } from "../_services";
import { alertActions } from "./";

export const pessoaActions = {
    create,
    list,
    get,
    update,
    delete: _delete
}

function create(pessoa) {
    return dispatch => {
        dispatch(request(pessoa));

        pessoaService.create(pessoa)
            .then(
                pessoa => {
                    dispatch(success(pessoa));
                    dispatch(alertActions.success("You have succesfuly created a Pessoa"));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    }

    function request(pessoa) { return { type: pessoaConstants.CREATE_REQUEST, pessoa } }
    function success(pessoa) { return { type: pessoaConstants.CREATE_SUCCESS, pessoa } }
    function failure(error) { return { type: pessoaConstants.CREATE_FAILURE, error } }
}

function list() {
    return dispatch => {
        dispatch(request());

        pessoaService.list()
            .then(
                pessoas => dispatch(success(pessoas)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: pessoaConstants.LIST_REQUEST } }
    function success(pessoas) { return { type: pessoaConstants.LIST_SUCCESS, pessoas } }
    function failure(error) { return { type: pessoaConstants.LIST_FAILURE, error } }
}

function get(id) {
    return dispatch => {
        dispatch(request(id));

        pessoaService.get(id)
            .then(
                pessoa => dispatch(success(pessoa)),
                error => dispatch(failure(id, error.toString()))
            );
    }

    function request(id) { return { type: pessoaConstants.GET_REQUEST, id } };
    function success(pessoa) { return { type: pessoaConstants.GET_SUCCESS, pessoa } };
    function failure(id) { return { type: pessoaConstants.GET_FAILURE, id, error } };
}

function update(id, pessoa) {
    return dispatch => {
        dispatch(request(id, pessoa));

        pessoaService.update(id, pessoa)
            .then(
                pessoaR => { 
                    dispatch(alertActions.success("You have succesfuly updatedd a Pessoa"));
                    dispatch(success(pessoa));
                },
                error => dispatch(failure(id, error.toString()))
            );
    }

    function request(id) { return { type: pessoaConstants.UPDATE_REQUEST, id } }
    function success(pessoa) { return { type: pessoaConstants.UPDATE_SUCCESS, pessoa } }
    function failure(id, error) { return { type: pessoaConstants.UPDATE_FAILURE, id, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        pessoaService.delete(id)
            .then(
                () => { 
                    dispatch(success(id));
                },
                error => { 
                    dispatch(failure(id, error.toString())) 
                }
            );
    };

    function request(id) { return { type: pessoaConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: pessoaConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: pessoaConstants.DELETE_FAILURE, id, error } }
}