import useAuth from "../hooks/useAuth";

const Profile = () => {
	const { user } = useAuth();
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
