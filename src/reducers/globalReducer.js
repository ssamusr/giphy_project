import { GET_RANDOM, GET_TRENDING, LOADING } from "../utils/globalActions"

export const globalReducer = (state, action) => {

    switch( action.type ) {
        case LOADING:
            return {
                ...state, 
                loading: true
            }

        case GET_TRENDING:
            return {
                ...state, 
                loading: false, 
                trending: action.payload 
            }
        
        case GET_RANDOM: {
            return {
                ...state,
                loading: false,
                random: action.payload
            }
        }
            
        default:
            break
    }

    return state
}