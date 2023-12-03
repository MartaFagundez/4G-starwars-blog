import React from "react";
import "../../styles/home.css";
import Sidebar from "../component/sidebar";

export default function Home() { 

	return (
		<div className="d-flex w-100">
			<Sidebar />

			{/* Characters list */}
			<main className="d-flex align-items-start w-100 p-4 mb-4">
				<h1>Home</h1>
			</main>
				
		</div>
	)
}
