import useUserSlice from "../store";

const Profile = () => {
	const user = useUserSlice();
	console.log(user);
	return (
		<div className="flex flex-col items-center justify-center mt-60 text-primary">
			<div>Email: {user?.email}</div>
			<div>
				Name: {user?.firstName} {user?.lastName}
			</div>

			<div>Phone: {user?.phoneNumber}</div>
		</div>
	);
};

export default Profile;
