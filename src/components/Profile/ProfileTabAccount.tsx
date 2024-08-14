import useUserSlice from "../../store";
import ProfileRow from "./ProfileRow";

const ProfileTabAccount = () => {
	const user = useUserSlice();
	return (
		<div>
			<div className="text-xl font-bold mb-4">General</div>
			<ProfileRow
				label="Email address"
				value={user.email}
				modalContent="a"
				modalTitle="b"
				buttonType="ARROW"
			/>
			<ProfileRow
				label="Password"
				modalContent="a"
				modalTitle="b"
				buttonType="ARROW"
			/>
			<ProfileRow
				label="Phone Number"
				modalContent="a"
				modalTitle="b"
				buttonType="ARROW"
			/>
			<div className="text-xl font-bold mb-4 mt-10">
				Account Authorization
			</div>
			<ProfileRow
				label="Google"
				subtitle="Connect to log in to Wave with your Google account"
				modalContent="a"
				modalTitle="b"
				buttonType="CONNECT"
			/>
		</div>
	);
};

export default ProfileTabAccount;
