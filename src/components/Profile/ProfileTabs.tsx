import ProfileTabAccount from "./ProfileTabAccount";

const ProfileTabs = () => {
	return (
		<div role="tablist" className="tabs tabs-bordered">
			<input
				type="radio"
				name="tab_account"
				role="tab"
				className="tab"
				aria-label="Account"
				defaultChecked
			/>
			<div role="tabpanel" className="tab-content p-10">
				<ProfileTabAccount />
			</div>

			<input
				type="radio"
				name="tab_account"
				role="tab"
				className="tab"
				aria-label="Profile"
			/>
			<div role="tabpanel" className="tab-content p-10">
				Profile
			</div>

			<input
				type="radio"
				name="tab_account"
				role="tab"
				className="tab"
				aria-label="Privacy"
			/>
			<div role="tabpanel" className="tab-content p-10">
				Privacy
			</div>

			<input
				type="radio"
				name="tab_account"
				role="tab"
				className="tab"
				aria-label="Preferences"
			/>
			<div role="tabpanel" className="tab-content p-10">
				Preferences
			</div>
			<input
				type="radio"
				name="tab_account"
				role="tab"
				className="tab"
				aria-label="Notifications"
			/>
			<div role="tabpanel" className="tab-content p-10">
				Notifications
			</div>
			<input
				type="radio"
				name="tab_account"
				role="tab"
				className="tab"
				aria-label="Email"
			/>
			<div role="tabpanel" className="tab-content p-10">
				Email
			</div>
		</div>
	);
};

export default ProfileTabs;
