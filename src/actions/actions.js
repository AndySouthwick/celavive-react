export const actionTypes = {
    CHANGE_LANGUAGE: '[Language] Language successfully changed'
}
export function chlan(language) {
    return{
        type: actionTypes.CHANGE_LANGUAGE,
        payload: language
    }
}