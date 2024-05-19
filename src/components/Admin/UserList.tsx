import { useCallback, useEffect, useState } from "react";
import api from "../../services/api/api";
import { AxiosError } from "axios";
import { User } from "../../types/types";
import UserCard from "./UserCard";
import { Pagination } from "../ui/Pagination";

const GET_USERS_URL = "http://localhost:3500/users/getPaginatedUsers";
const RESULTS_PER_PAGE = 10; //make this be changeable

/* TODO MAKE THIS PRIVATE */
const UserList = () => {
	const [users, setUsers] = useState<User[] | undefined>();
	const [userCount, setUserCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [skip, setSkip] = useState(0);

	const fetchPaginatedUsers = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await api.get(GET_USERS_URL, {
				params: {
					take: RESULTS_PER_PAGE,
					skip,
				},
			});

			const { count, result } = response.data;
			setUserCount(count);
			setUsers(result);
		} catch (error: unknown) {
			if (error instanceof AxiosError) {
				console.error(error.cause);
			} else {
				console.error(error);
			}
		}
		setIsLoading(false);
	}, [skip]);

	const content = users?.map((user: User) => (
		<UserCard key={user.id} {...user}></UserCard>
	));

	useEffect(() => {
		fetchPaginatedUsers();
	}, [fetchPaginatedUsers]);

	return (
		<div className="flex justify-center">
			<div>
				<div className="overflow-x-auto">
					{isLoading ? (
						<div className="flex justify-center items-center">
							<span className="loading loading-dots loading-lg"></span>
						</div>
					) : (
						<table className="table">
							<thead>
								<tr>
									<th>ID</th>
									<th>Email</th>
									<th>Full Name</th>
									<th>Phone</th>
								</tr>
							</thead>
							<tbody>{content}</tbody>
						</table>
					)}
					<Pagination
						currentPage={currentPage}
						resultsPerPage={RESULTS_PER_PAGE}
						setCurrentPage={setCurrentPage}
						setSkip={setSkip}
						totalItems={userCount}
					/>
				</div>
			</div>
		</div>
	);
};

export default UserList;
