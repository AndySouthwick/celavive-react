export const actionTypes = {
    CHANGE_LANGUAGE: '[Language] Language successfully changed',
  UPDATE_PAGE: '[PAGE]  successfully updated page with language'
}
export function chlan(language) {
    return{
        type: actionTypes.CHANGE_LANGUAGE,
        payload: language
    }
}

export function chpage(page) {
  console.log('hit action')
    return {
      type: actionTypes.UPDATE_PAGE,
      payload: page
    }
}