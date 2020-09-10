import { CHANGE_SEARCH_FIELD } from './constant.js';
export const setSearchfield = (text) => {
    return ({
        type: CHANGE_SEARCH_FIELD,
        payload: text

    })
}