import { createContext, useContext, useEffect, useReducer } from "react"
import PropTypes from "prop-types"
import { globalReducer } from "../reducers/globalReducer"
import axios from "axios"
import { ADD_TO_FAVOURITES, GET_FAVOURITES, GET_RANDOM, GET_SEARCH, GET_TRENDING, LOADING } from "../utils/globalActions"

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

    //search giff
    const searchGiffs = async(query) => {
        dispatch({ type: LOADING })
        const res = await axios.get(`${baseUrl}/search?api_key=${apiKey}&q=${query}&limit=10`)

        dispatch({ type: GET_SEARCH, payload: res.data.data})
    }

    // save to favs
    const saveToFavourites = (gif) => {
        const storedItems = JSON.parse(window.localStorage.getItem('myFavourites')) || []

        const existingItem = storedItems.find( item => item.id === gif.id)

        if(!existingItem) {
            const items = [...storedItems, gif]
            window.localStorage.setItem('myFavourites', JSON.stringify(items))
            dispatch({ type: ADD_TO_FAVOURITES, payload: gif})
            alert('Added to favs')
        } else {
            alert('Already exist')
        }
    }

    const removeFromLocalStorage = (gif) => {
        const storedItems = JSON.parse(window.localStorage.getItem('myFavourites')) || []

        const items = storedItems.filter((item) => item.id !== gif.id)
        window.localStorage.setItem('myFavourites', JSON.stringify(items))

        //get updated list

        getFromLocalStorage()
    }

    const getFromLocalStorage = () => {
        const storedItems = JSON.parse(window.localStorage.getItem('myFavourites')) || []

        dispatch({ type: GET_FAVOURITES, payload: storedItems})

    }

    //Initial Renders
    useEffect(() => {
        getTrending()
        getRandomGiff()
        getFromLocalStorage()
    }, [])
    
  return (
    <GlobalContext.Provider value={{
        ...state,
        getRandomGiff,
        searchGiffs,
        saveToFavourites,
        removeFromLocalStorage
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