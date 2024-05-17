import axios from "axios"

export const getAllApiData = () => {
    return axios.get("https://dummyjson.com/products")
}