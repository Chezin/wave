import { useEffect } from "react";
import api from "../services/api/api";
import useUserSlice from "../store";

const PROFILE_URL = "http://localhost:3500/users/me";

const useAuth = () => {
	const { login, setLoading } = useUserSlice();

	useEffect(() => {
		const loadUser = async () => {
			try {
				const response = await api.get(PROFILE_URL, {
					headers: {
						"Content-Type": "application/json",
					},
				});
				login(response.data);
				setLoading(false); // Set loading to false after user data is fetched
			} catch (error) {
				setLoading(false); // Also set loading to false if an error occurs
			}
		};

		loadUser();
	}, [login, setLoading]);
};

export default useAuth;
