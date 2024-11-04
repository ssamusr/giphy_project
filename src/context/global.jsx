import { createContext, useContext, useEffect, useReducer } from "react"
import PropTypes from "prop-types"
import { globalReducer } from "../reducers/globalReducer"
import axios from "axios"
import { GET_RANDOM, GET_TRENDING, LOADING } from "../utils/globalActions"

const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = 'https://api.giphy.com/v1/gifs'

const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    const initialState = {
        loading: false,
        searchResults: [],
        trending: [],
        favourites: [],
        random: {}
    }

    const [state, dispatch] = useReducer(globalReducer, initialState)

    //get trending gif
    const getTrending = async() => {
        dispatch({ type: LOADING })
        const res = await axios.get(`${baseUrl}/trending?api_key=${apiKey}&limit=10`)

        dispatch({ type: GET_TRENDING, payload: res.data.data })
    }

    //get random gif
    const getRandomGiff = async() => {
        dispatch({ type: LOADING })
        const res = await axios.get(`${baseUrl}/random?api_key=${apiKey}`)

        dispatch({ type: GET_RANDOM, payload: res.data.data})
    }

    //Initial Renders
    useEffect(() => {
        getTrending()
        getRandomGiff()
    }, [])
    
  return (
    <GlobalContext.Provider value={{
        ...state,
        getRandomGiff,
    }}>
        { children }
    </GlobalContext.Provider>
  )
}

GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export const useGlobal = () => {
    return useContext(GlobalContext)
}