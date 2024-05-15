import { User } from "../../types/types";

const UserCard = (user: User) => {
	return (
		<tr className="bg-base-200 border-secondary">
			<th>{user.id}</th>
			<td>{user.email}</td>
			<td>{`${user.firstName} ${user.lastName}`}</td>
			<td>{user.phoneNumber}</td>
			<td>
				<button>
					<img src="src/assets/trashcan.svg"></img>
				</button>
			</td>
		</tr>
	);
};

export default UserCard;
