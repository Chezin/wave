// import { AxiosError } from "axios";
// import api from "../api/api";

// const MEALS_URL = "http://localhost:3500/food/";
// const RESULTS_PER_PAGE = 10;
const Meals = () => {
	// const [skip, setSkip] = useState(0);

	// const fetchFoodItems = useCallback(async () => {
	// 	try {
	// 		const response = await api.get(MEALS_URL, {
	// 			params: {
	// 				take: RESULTS_PER_PAGE,
	// 				skip,
	// 			},
	// 		});

	// 		const { count, result } = response.data;
	// 		setUserCount(count);
	// 		setUsers(result);
	// 	} catch (error: unknown) {
	// 		if (error instanceof AxiosError) {
	// 			console.error(error.cause);
	// 		} else {
	// 			console.error(error);
	// 		}
	// 	}
	// }, [skip]);

	return (
		<div className="flex justify-center mt-10">
			<div>oi</div>
		</div>
	);
};

export default Meals;
