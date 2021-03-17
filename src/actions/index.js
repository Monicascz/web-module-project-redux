export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE_FEATURE"

export const addFeature = (addedFeat) => {
    return { type: ADD_FEATURE, payload:addedFeat}
}
export const removeFeature = (removedFeat) =>{
    return{ type: REMOVE_FEATURE, payload:removedFeat}
}