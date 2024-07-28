import requester from "./requester.js";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (courseId, text) => requester.post(BASE_URL, { courseId, text });

const getAll = (courseId) => {
    const params = new URLSearchParams({
        where: `courseId="${courseId}"`,
        load: `author=_ownerId:users`
    });
    
    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const commentsAPI = {
    create,
    getAll
}

export default commentsAPI;