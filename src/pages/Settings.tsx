import ProfileTabs from "../components/Profile/ProfileTabs";
import useUserSlice from "../store";

const Settings = () => {
	const user = useUserSlice();
	console.log(user);
	return (
		<div className="settings-container">
			<div className="text-primary font-bold text-5xl mb-6">Settings</div>
			<div className="w-full">
				<ProfileTabs />
			</div>
		</div>
	);
};

export default Settings;
