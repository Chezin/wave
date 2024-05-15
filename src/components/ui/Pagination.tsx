import React from "react";

interface PaginationProps {
	setCurrentPage: (page: number) => void;
	setSkip: (skip: number) => void;
	currentPage: number;
	totalItems: number;
	resultsPerPage: number;
	skip: number;
}

export const Pagination: React.FC<PaginationProps> = ({
	currentPage,
	setSkip,
	setCurrentPage,
	totalItems,
	resultsPerPage,
}) => {
	let newPage;
	const getPrevious = () => {
		newPage = currentPage - 1;
		setCurrentPage(newPage);
		setSkip((newPage - 1) * resultsPerPage);
	};

	const getNext = () => {
		newPage = currentPage + 1;
		setCurrentPage(newPage);
		setSkip((newPage - 1) * resultsPerPage);
	};

	const pagination = [];
	const totalPages = Math.ceil(totalItems / resultsPerPage);
	for (let i = 1; i <= totalPages; i++) {
		pagination.push(
			<button
				key={i}
				className="join-item btn mr-[2px] ml-[2px]"
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

	return (
		<div className="flex justify-center space-x-1 m-2">
			<button
				className="btn join-item"
				disabled={currentPage === 1}
				onClick={getPrevious}
			>
				Prev
			</button>
			{pagination}
			<button
				className="btn join-item"
				disabled={currentPage === totalPages}
				onClick={getNext}
			>
				Next
			</button>
		</div>
	);
};
