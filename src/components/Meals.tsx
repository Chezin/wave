import { AxiosError } from "axios";
import { useCallback, useEffect, useState } from "react";
import { Pagination } from "./ui/Pagination";
import api from "../services/api/api";

const MEALS_URL = "http://localhost:3500/food/";
const RESULTS_PER_PAGE = 10;

interface Meal {
	name: string;
	calories: number;
	carbohidrates: number;
	proteins: number;
	fats: number;
}

const Meals = () => {
	const [skip, setSkip] = useState(0);
	const [mealsCount, setMealsCount] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [meals, setMeals] = useState<Meal[] | null>();
	const fetchFoodItems = useCallback(async () => {
		try {
			const response = await api.get(MEALS_URL, {
				params: {
					take: RESULTS_PER_PAGE,
					skip,
				},
			});

			const { count, result } = response.data;
			setMealsCount(count);
			setMeals(result);
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				console.error(error.cause);
			} else {
				console.error(error);
			}
		}
	}, [skip]);

	const renderMeals = () => {
		return meals?.map((meal, index) => (
			<div key={index}>
				<p>{meal.name}</p>
				<p>Calories: {meal.calories}</p>
				<p>Carbohydrates: {meal.carbohidrates}</p>
				<p>Proteins: {meal.proteins}</p>
				<p>Fats: {meal.fats}</p>
			</div>
		));
	};

	useEffect(() => {
		fetchFoodItems();
	}, [fetchFoodItems]);

	return (
		<div className="flex justify-center mt-10">
			<div className="flex justify-center">{renderMeals()}</div>
			<Pagination
				currentPage={currentPage}
				resultsPerPage={RESULTS_PER_PAGE}
				setCurrentPage={setCurrentPage}
				setSkip={setSkip}
				totalItems={mealsCount}
			></Pagination>
		</div>
	);
};

export default Meals;
