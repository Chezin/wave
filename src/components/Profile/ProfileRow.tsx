import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

type ProfileRowProps = {
	label: string;
	subtitle?: string;
	value?: string;
	modalTitle: string;
	modalContent: string;
	buttonType: "ARROW" | "CONNECT";
};

const ProfileRow = ({
	label,
	subtitle,
	value,
	modalTitle,
	modalContent,
	buttonType,
}: ProfileRowProps) => {
	const [showModal, setShowModal] = useState(false);

	const handleModalToggle = () => {
		setShowModal((prevState) => !prevState);
	};

	return (
		<div className="mt-2">
			<div
				className="flex flex-col cursor-pointer"
				onClick={handleModalToggle}
			>
				<div className="flex items-center justify-between">
					<div className="text-lg">{label}</div>
					<div className="flex items-center gap-2">
						<span>{value}</span>

						{buttonType === "ARROW" && (
							<button className="btn btn-circle btn-ghost btn-sm">
								<MdKeyboardArrowRight size={24} />
							</button>
						)}
						{buttonType === "CONNECT" && (
							<button className="btn btn-ghost btn-sm">
								Connect
							</button>
						)}
					</div>
				</div>
				{subtitle && (
					<div className="text-sm text-gray-500">{subtitle}</div>
				)}
			</div>
			{/* TODO separate component */}
			{showModal && (
				<div
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
					onClick={handleModalToggle}
				>
					<div
						className="bg-white p-6 rounded shadow-lg"
						onClick={(e) => e.stopPropagation()}
					>
						<h3 className="font-bold text-lg">{modalTitle}</h3>
						<p className="py-4">{modalContent}</p>
						<div className="flex justify-end">
							<button className="btn" onClick={handleModalToggle}>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProfileRow;
