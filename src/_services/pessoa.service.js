import config from 'config';

export const pessoaService = {
    create,
    list,
    get,
    update,
    delete: _delete
};

function list() {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/pessoas`, requestOptions).then(handleResponse);
}

function get(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/pessoas/${id}`, requestOptions).then(handleResponse);
}

function create(pessoa) {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(pessoa)
    };

    return fetch(`${config.apiUrl}/pessoas`, requestOptions).then(handleResponse);
}

function update(id, pessoa) {
    const requestOptions = {
        method: 'PUT',
        body: JSON.stringify(pessoa)
    };

    return fetch(`${config.apiUrl}/pessoas/${id}`, requestOptions).then(handleResponse);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE'
    };

    return fetch(`${config.apiUrl}/pessoas/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}