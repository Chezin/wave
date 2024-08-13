import { render, screen } from "@testing-library/react";
import HeaderRoot from "./HeaderRoot";
import useUserSlice from "../../store";
import "@testing-library/jest-dom";
// Mock the useUserSlice hook
jest.mock("../../store", () => ({
	__esModule: true,
	default: jest.fn(),
}));

describe("HeaderRoot", () => {
	it("renders SignedIn component when user is authenticated", () => {
		// Mock implementation to return authenticated user
		(useUserSlice as unknown as jest.Mock).mockReturnValue({
			id: 0,
			email: "aiosdjoas@amasifj.com",
			firstName: "ksdfjsd",
			lastName: "iasjod",
			phoneNumber: "23485734957",
			isAuthenticated: true,
		});

		render(<HeaderRoot />);
		expect(screen.getByTestId("signed-in-header")).toBeInTheDocument();
	});

	it("renders SignedOff component when user is not authenticated", () => {
		// Mock implementation to return unauthenticated user
		(useUserSlice as unknown as jest.Mock).mockReturnValue({
			id: 0,
			email: "",
			firstName: "",
			lastName: "",
			phoneNumber: "",
			isAuthenticated: false,
		});

		render(<HeaderRoot />);
		expect(screen.getByTestId("signed-off-header")).toBeInTheDocument();
	});
});
