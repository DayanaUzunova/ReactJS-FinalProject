import * as request from './requester.js';

const BASE_URL = 'http://localhost:3030/data/courses';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const courses = Object.values(result);

    return courses;
};

export const getOne = (courseId) => request.get(`${BASE_URL}/${courseId}`);
export const create = (coursesData) => request.post(`${BASE_URL}`, coursesData)
export const remove = (courseId) => request.del(`${BASE_URL}/${courseId}`);
export const update = (courseId, coursesData) => request.put(`${BASE_URL}/${courseId}`, coursesData);

const coursesAPI = {
    getAll,
    getOne,
    create,
    remove,
    update
};

export default coursesAPI;