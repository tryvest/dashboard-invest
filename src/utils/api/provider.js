import axios from 'axios';
import { handleResponse, handleError } from './response';

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally

export const BASE_URL = 'https://endpoints-staging-wb5xla47ea-uc.a.run.app/api';
// export const BASE_URL = 'http://127.0.0.1:5000/api';

axios.defaults.headers.post.contentType = 'application/json';
axios.defaults.headers.post.accept = 'application/json';


/** @param {string} resource */
const getAll = (resource) => axios
        .get(`${BASE_URL}/${resource}`)
        .then(handleResponse)
        .catch(handleError);

/** @param {string} resource */
/** @param {string} id */
const getSingle = (resource, id) => {
    return axios
        .get(`${BASE_URL}/${resource}/${id}`)
        .then(handleResponse)
        .catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const post = (resource, model) => {
    return axios
        .post(`${BASE_URL}/${resource}`, model)
        .then(handleResponse)
        .catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const put = (resource, model) => {
    return axios
        .put(`${BASE_URL}/${resource}`, model)
        .then(handleResponse)
        .catch(handleError);
};

/** @param {string} resource */
/** @param {object} model */
const patch = (resource, model) => {
    return axios
        .patch(`${BASE_URL}/${resource}`, model)
        .then(handleResponse)
        .catch(handleError);
};

/** @param {string} resource */
/** @param {string} id */
const remove = (resource, id) => {
    return axios
        .delete(`${BASE_URL}/${resource}`, {data: id})
        .then(handleResponse)
        .catch(handleError);
};

export const apiProvider = {
    getAll,
    getSingle,
    post,
    put,
    patch,
    remove,
};