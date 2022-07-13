import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '28570265-dd79f6ce79ed9d2926b94f1d9';

async function fetchImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}

export { fetchImages };






