import config from 'config';

export const cursoService = {
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

    return fetch(`${config.apiUrl}/cursos`, requestOptions).then(handleResponse);
}

function get(id) {
    const requestOptions = {
        method: 'GET',
    };

    return fetch(`${config.apiUrl}/cursos/${id}`, requestOptions).then(handleResponse);
}

function create(curso) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(curso)
    };

    return fetch(`${config.apiUrl}/cursos`, requestOptions).then(handleResponse);
}

function update(id, curso) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(curso)
    };

    return fetch(`${config.apiUrl}/cursos/${id}`, requestOptions).then(handleResponse);
}

function _delete(id) {
    const requestOptions = {
        method: 'DELETE'
    };

    return fetch(`${config.apiUrl}/cursos/${id}`, requestOptions).then(handleResponse);
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