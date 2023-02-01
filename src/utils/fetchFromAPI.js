import axios from 'axios'
const mainURL = 'https://youtube-v31.p.rapidapi.com'
const options = {
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': '71501793b7msh53b6734223bb168p1b6b76jsn08473d3e034e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${mainURL}/${url}`, options);
    return data;
}
