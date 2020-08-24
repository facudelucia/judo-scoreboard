import { types } from "../types/types"

export const setIpponBlue = () =>{
    return{
        type: types.IPPON_BLUE
    }
}
export const setIpponWhite = () =>{
    return{
        type: types.IPPON_WHITE
    }
}
export const setGoldenScore = () =>{
    return{
        type: types.GOLDEN_SCORE
    }
}

export const deleteIpponWhite = () =>{
    return{
        type: types.DELETE_IPPON_WHITE
    }
}
export const deleteIpponBlue = () =>{
    return{
        type: types.DELETE_IPPON_BLUE
    }
}
export const deleteGolden = () => {
    return{
        type: types.DELETE_GOLDEN
    }
}