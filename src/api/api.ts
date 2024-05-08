import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({});

api.interceptors.request.use(
	(config) => {
		const token = Cookies.get("access-token");
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		console.log("status", error.status);
		const originalRequest = error.config;

		if (error.status === 401) {
			console.log("error config", error.config);
			try {
				const refreshToken = Cookies.get("refresh-token");
				console.log("old refresh token: ", refreshToken);
				const response = await axios.post(
					"http://localhost:3500/auth/refresh",
					{
						refreshToken,
					}
				);
				const { token } = response.data;

				Cookies.set("access-token", token);
				originalRequest.headers.Authorization = `Bearer ${token}`;

				return axios(originalRequest);
			} catch (error) {
				// Handle refresh token error or redirect to login
			}
		}

		return Promise.reject(error);
	}
);
export default api;
