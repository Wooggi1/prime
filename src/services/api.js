import axios from 'axios';

// Base URL: https://api.themoviedb.org/3
// URL DA API: movie/now_playing?api_key=9fe13be7a7721b0f0b4e2db866fe4667&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default api;