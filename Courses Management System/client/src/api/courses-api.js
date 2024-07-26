import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/jsonstore/courses';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const courses = Object.values(result);

    return courses;
};

export const getOne = (courseId) => request.get(`${BASE_URL}/${courseId}`);
export const create = (coursesData) => request.post(`${BASE_URL}`, coursesData)

const coursesAPI = {
    getAll,
    getOne,
    create
};

export default coursesAPI;