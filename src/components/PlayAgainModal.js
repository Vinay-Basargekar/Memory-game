import React from "react";

const PlayAgainModal = ({ onClose }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-mono">
			<div className="bg-white p-8 rounded shadow-lg text-center">
				<h2 className="text-2xl mb-4">Oh no!</h2>
				<p className="text-lg mb-4">You selected the same card. Play again!</p>
				<button
					className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900"
					onClick={onClose}
				>
					Play Again
				</button>
			</div>
		</div>
	);
};

export default PlayAgainModal;
