import { types } from "../../types/types"



export const projectReducer = ( state , action) => {
    switch (action.type) {

        case types.prGetProjects: 
            return {
                ...state,
                projects:[...action.payload]
            }
        
        default:
            return state
    }
}