import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key:"1b66264d09f176ef5fbd889602cd9b51",
        language: "en-US"
    }
})

export const tvApi = {
    TopRated: () => api.get("tv/top_rated"),
    Popular: () => api.get("tv/popular"),
    AiringToday: () => api.get("tv/airing_today"),
    TvDetail: id => api.get(`tv/${id}`,{
        params : {
            append_to_response: "videos"
        }
    }),
    Search: (term) => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const movieApi = {
    NowPlaying: () => api.get("movie/now_playing"),
    Upcoming: () => api.get("movie/upcoming"),
    Popular: () => api.get("movie/popular"),
    MovieDeatail: id => api.get(`movie/${id}`,{
        params: {
            append_to_response: "videos"
        }
    }),
    Search: (term) => api.get("search/movie" ,{
        params: {
            query: encodeURIComponent(term)
        }
    })
};

