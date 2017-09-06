import {actionTypes} from "../actions/actions";

export const initialState = {
    id: 1,
    language: 'us-en',
    intro: 'Products that actively support beauty-preserving\n' +
    'functions in your skin to defy visible signs of aging\n' +
    'like photodamage, dryness, loss of firmness,\n' +
    'discoloration, texture, and wrinkles to dramatically\n' +
    'improve the look of your skin.',
    founded: 'World leaders in nutrition and creators of USANA InCelligence Technology™ have discovered a way to specifically target your ' +
    'unique beauty needs. Using targeted nutrient combinations, Celavive awakens your cells’ natural renewing ability to ' +
    'activate youth-preserving beauty functions, going beyond traditional skincare regimens. This comprehensive approach ' +
    'means Celavive responds uniquely to each individual person, improving the look of skin tone and texture, while dramatically ' +
    'reducing the appearance of wrinkles. By using natural botanicals and powerful peptides to support the communication that signals ' +
    'healthy skin cell activity, your complexion will begin to appear healthier, more radiant, and incredibly restored. Discover your ' +
    'skin’s natural ability to fight visible aging.' +
    '',
    science: 'The exclusive Cell-Signalling Complex found in Celavive ' +
    'is made up of two bioactive peptides and two botanical extracts. When combined, ' +
    'these ingredients work to counteract visible signs of chronological and lifestyle stress ' +
    'aging like fine lines and wrinkles by targeting key skin receptors. Plus, these key beauty ingredients ' +
    'support your body’s own natural lipid production and help reinforce six major elements that can help maintain' +
    'a healthy skin matrix, including collagen, elastin, and hyaluronic acid, for noticeably younger-looking skin.'
}

export function reducer(state = initialState, action){
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:
            return{
                ...initialState,
                id: action.payload.id,
                language: action.payload.language,
                intro: action.payload.intro,
                founded: action.payload.founded,
                science: action.payload.science
            }
        default:
            return state
    }
}