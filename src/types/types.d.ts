export type User = {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: string;
};

export type LoginParams = {
	email: string;
	password: string;
};

export type LoginReducerAction = {
	type: "SET_EMAIL" | "SET_PASSWORD";
	payload: string;
};

export type LoginContentProps = {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	loginState: LoginParams;
	setLoginState: React.Dispatch<LoginReducerAction>;
	error?: number;
	isLoading: boolean;
};
