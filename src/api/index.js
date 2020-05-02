import axios from 'axios';
import key from '../apiKeys';
// const initialLimit = 25;
// const API_KEY = "sbMjovUMJFA7AGspK39JaQno7WShLTSI";

export const fetchSearchData = async (query, limit=25) => {
    try {
        const { data } = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${key.API_KEY}&q=${query}&limit=${limit}&offset=0&rating=G&lang=en`);

        // console.log(data.data);
        return data.data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchTrendingData = async (limit = 25) => {
    try {
        const {data} = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${key.API_KEY}&limit=${limit}&rating=G`);
        // console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}