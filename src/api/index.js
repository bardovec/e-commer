import axios from 'axios';

const API = 'https://findify-assets.s3.amazonaws.com/test-task/test_response.json';
const colorApi = 'https://findify-assets.s3.amazonaws.com/test-task/test_color_mapping.json';

export const fetchPosts = () => axios.get(API);
export const fetchColors = () => axios.get(colorApi);
export const fetchPostsById = (id) => axios.get(`${API}${id}`);
export const filterByName = (page, name) => axios.get(`${API}?page=${page}&name=${name}`);
