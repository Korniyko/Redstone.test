import { setCategories } from "../store/actions"


export const getCategories = () => (dispatch: any, getState: () => any): Promise<void> => {

    return fetch('http://localhost:6500/api/getCategories', {
        headers: {
            'Content-type': 'application/json;charset=utf-8'
        },
        method: 'GET',

    }).then((response: Response) => {
        if (!response.ok) {
            throw new Error(response.statusText)

        }
        return response
    })
        ccccc
}    