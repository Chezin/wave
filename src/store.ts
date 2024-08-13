import { create, StateCreator } from "zustand";
import { User } from "./types/types";

type UserSlice = User & {
	isAuthenticated: boolean;
	setId: (id: number) => void;
	setEmail: (email: string) => void;
	setFirstName: (firstName: string) => void;
	setLastName: (lastName: string) => void;
	setPhoneNumber: (phoneNumber: string) => void;
	setLoading: (isLoading: boolean) => void;
	login: (user: User) => void;
	logout: () => void;
	isLoading: boolean;
};

const createUserSlice: StateCreator<UserSlice> = (set) => ({
	id: 0,
	email: "",
	firstName: "",
	lastName: "",
	phoneNumber: "",
	isAuthenticated: false,
	isLoading: true,

	setId: (id) => set({ id }),
	setEmail: (email) => set({ email }),
	setFirstName: (firstName) => set({ firstName }),
	setLastName: (lastName) => set({ lastName }),
	setPhoneNumber: (phoneNumber) => set({ phoneNumber }),
	setLoading: (isLoading) => set({ isLoading }),

	login: (user) =>
		set({
			...user,
			isAuthenticated: true,
		}),

	logout: () =>
		set({
			id: 0,
			email: "",
			firstName: "",
			lastName: "",
			phoneNumber: "",
			isAuthenticated: false,
		}),
});
const useUserSlice = create(createUserSlice);

export default useUserSlice;
