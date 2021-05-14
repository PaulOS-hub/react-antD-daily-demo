import * as Type from './action-type'
import { get } from 'axios'
export const savaForm = (payload) => {
    return {
        type: Type.SAVEFORM,
        payload
    }
}

export const asyncMethod = () => {
    return async dispatch => {
        try {
            let { data } = await get("http://jsonplaceholder.typicode.com/posts")
            console.log(data)
            dispatch({
                type: Type.GETLIST,
                payload: data
            })
        } catch (error) {
            console.error(error);

        }

    }
}