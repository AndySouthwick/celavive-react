import {actionTypes} from "../actions/actions";

export const initialState = {
    id: '',
    language: '',
    intro: '',
    science: '',
   founded: '',
    page:'1'
}

export function reducer(state = initialState, action){
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            return{
                ...state,
                changeit: action.payload,
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
                modalformbtnnothanks: action.payload.modalformbtnnothanks,
                flag: action.payload.flag,
                productstagline: action.payload.productstagline,
                productsdryskin: action.payload.productsdryskin,
                productscombooily: action.payload.productscombooily,
                productscleanse: action.payload.productscleanse,
                productstextcleanse: action.payload.productstextcleanse,
                productsmakeupremove: action.payload.productsmakeupremove,
                productscreamyfoam: action.payload.productscreamyfoam,
                productscomboitallic: action.payload.productscomboitallic,
                productsgentlemilk: action.payload.productsgentlemilk,
                productsdrytallic: action.payload.productsdrytallic,
                productstone: action.payload.productstone,
                productstexttone: action.payload.productstexttone,
                productsperfectingtoner: action.payload.productsperfectingtoner,
                productsenhance: action.payload.productsenhance,
                productstextenhance: action.payload.productstextenhance,
                productshydeyeesence: action.payload.productshydeyeesence,
                productsvitalizingserum: action.payload.productsvitalizingserum,
                productshydrate: action.payload.productshydrate,
                productstexthydrate: action.payload.productstexthydrate,
                productsprodaylotion: action.payload.productsprodaylotion,
                productsprodaycream: action.payload.productsprodaycream,
                productsrepnightgel: action.payload.productsrepnightgel,
                productsrepnightcream: action.payload.productsrepnightcream
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