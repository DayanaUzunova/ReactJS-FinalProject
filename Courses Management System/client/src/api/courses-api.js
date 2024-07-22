import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/jsonstore/courses';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const courses = Object.values(result);

    return courses;
};

export const getOne = (courseId) => request.get(`${BASE_URL}/${courseId}`);

const coursesAPI = {
    getAll,
    getOne
};

export default coursesAPI;