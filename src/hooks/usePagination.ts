import { useCallback, useState } from "react";

export type SortOrder = "asc" | "desc";
export type UsePaginationResult = {
	page: number;
	onPageChange: (page: number) => void;
	onSort: (column: string) => void;
	rowsPerPage: number;
	onRowsPerPageChange: (value: number) => void;
	order: SortOrder;
	orderBy: string;
};

export const usePagination = (): UsePaginationResult => {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);
	const [order, setOrder] = useState<SortOrder>("desc");
	const [orderBy, setOrderBy] = useState("createdAt");

	const handleOnPageChange = useCallback((page: number) => {
		setPage(page);
	}, []);

	const handleOnRowsPerPageChange = useCallback((value: number) => {
		setRowsPerPage(value);
	}, []);

	const handleOnSort = useCallback(
		(column: string) => {
			if (column === orderBy) {
				setOrder((prev) => (prev === "asc" ? "desc" : "asc"));
			}
			setOrderBy(column);
		},
		[orderBy]
	);

	return {
		onPageChange: handleOnPageChange,
		onRowsPerPageChange: handleOnRowsPerPageChange,
		onSort: handleOnSort,
		order,
		orderBy,
		page,
		rowsPerPage,
	};
};
