import { useEffect, useReducer } from 'react';
import commentsAPI from '../api/comments-api.js';

export function useCreateComment() {
    const createHandler = (courseId, comment) => commentsAPI.create(courseId, comment);

    return createHandler;
}

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice();
        case 'ADD_COMMENT':
            return [...state, action.payload];
        default:
            return state;
    }
}

export function useGetAllComments(courseId) {
    const [commnets, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(courseId);

            dispatch({ type: 'GET_ALL', payload: result });
        })();
    }, [courseId]);

    return [commnets, dispatch];
}