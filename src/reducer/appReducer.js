import {types} from "../types/types"

const initialState = {
    goldenScore: false,
    ipponBlue: false,
    ipponWhite: false
}

export default (state=initialState, action) => {
    switch (action.type) {
        case types.IPPON_BLUE:
            return{
                ...state,
                ipponBlue:true
            }
        case types.IPPON_WHITE:
            return{
                ...state,
                ipponWhite:true
            }
        case types.GOLDEN_SCORE:
            return{
                ...state,
                goldenScore: true
            }
        case types.DELETE_IPPON_WHITE:
            return{
                ...state,
                ipponWhite:false
            }
        case types.DELETE_IPPON_BLUE:
            return{
                ...state,
                ipponBlue:false
            }
        case types.DELETE_GOLDEN:
            return{
                ...state,
                goldenScore: false
            }
        default:
            return state;
    }
}