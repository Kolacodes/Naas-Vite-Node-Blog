import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: "https://naas-blog.onrender.com/api/"
})