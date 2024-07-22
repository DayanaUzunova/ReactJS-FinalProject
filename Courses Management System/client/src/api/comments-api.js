import requester from "./requester.js";

const BASE_URL = 'http://localhost:3030/jsonstore/courses';

const buildUrl = (courseId) => `${BASE_URL}/${courseId}/comments`;

const create = async (courseId, username, text) => await requester.post(buildUrl(courseId), { username, text });

const getAll = async (courseId) => {
    const result = await requester.get(buildUrl(courseId));

    const comments = Object.values(result);

    return comments;
}

export default {
    create,
    getAll
};