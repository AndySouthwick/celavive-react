import {actionTypes} from "../actions/actions";

export const initialState = {
    id: 1,
    language: '',
    intro: '',
    science: '',
   founded: '',
    page:''
}

export function reducer(state = initialState, action){
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            return{
                ...state,
                id: action.payload.id,
                incellheader: action.payload.incellheader,
                language: action.payload.language,
                img1: action.payload.img1,
                img2: action.payload.img2,
                celavivefounded: action.payload.celavivefounded,
                intro: action.payload.intro,
                introheader: action.payload.introheader,
                founded: action.payload.founded,
                science: action.payload.science,
                ctabutton: action.payload.ctabutton,
                modalheader: action.payload.modalheader,
                modalearly: action.payload.modalearly,
                modalsub: action.payload.modalsub,
                modalformph:  action.payload.modalformph,
                modalformbtnsub: action.payload.modalformbtnnothanks,
                modalformbtnnothanks: action.payload.modalformbtnnothanks
            }
      case actionTypes.UPDATE_PAGE:
        console.log('hit reducer')
        return{
          ...state,
          page: action.payload.page
        }
        default:
            return state
    }
}