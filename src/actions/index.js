export const ADD_FEATURE = "ADD_FEATURE"

export const addFeature = (addedFeat) => {
    return { type: ADD_FEATURE, payload:addedFeat}
}