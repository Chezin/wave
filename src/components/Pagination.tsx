import React from "react";

interface PaginationProps {
	setCurrentPage: (page: number) => void;
	setSkip: (skip: number) => void;
	currentPage: number;
	totalItems: number;
	resultsPerPage: number;
}

export const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	setSkip,
	setCurrentPage,
	totalItems,
	resultsPerPage,
}) => {
	const pagination = [];
	const totalPages = Math.ceil(totalItems / resultsPerPage);
	for (let i = 1; i <= totalPages; i++) {
		pagination.push(
			<button
				key={i}
				className="join-item btn m-1"
				disabled={currentPage === i}
				onClick={() => {
					setCurrentPage(i);
					setSkip((i - 1) * resultsPerPage);
				}}
			>
				{i}
			</button>
		);
	}

	console.log(currentPage, "currentPage");
	console.log(totalPages, "totalPages");

	return (
		<div className="flex justify-center mt-4 space-x-1">
			<button
				className="btn btn-sm"
				disabled={currentPage === 1}
				onClick={() => {
					setCurrentPage(currentPage - 1);
					console.log(currentPage, "PREV CURRENT PAGE");
					setSkip((currentPage - 1) * resultsPerPage);
				}}
			>
				Prev
			</button>

			<div className="flex space-x-1">{pagination}</div>

			<button
				className="btn btn-sm"
				disabled={currentPage === totalPages}
				onClick={() => {
					setCurrentPage(currentPage + 1);
					console.log(currentPage, "NEXT CURRENT PAGE");
					setSkip((currentPage - 1) * resultsPerPage);
				}}
			>
				Next
			</button>
		</div>
	);
};
