// src/components/WinnerModal.js
import React from "react";

const Winner = ({ onClose }) => {
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-mono">
			<div className="bg-white p-8 rounded shadow-lg text-center">
				<h2 className="text-2xl mb-4">Congratulations!</h2>
				<p className="text-lg mb-4">You are the winner!</p>
				<button
					className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
					onClick={onClose}
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default Winner;
