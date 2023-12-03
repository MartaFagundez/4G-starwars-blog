import React from "react";
import "../../styles/home.css";
import Sidebar from "../component/sidebar";
import poster from "../../img/starwars_poster.jpg";

export default function Home() { 

	return (
		<div className="d-flex w-100">
			<Sidebar />

			<main className="d-flex flex-column align-items-center justify-content-start w-100 p-4 mb-4">
				<figure className="d-flex w-100" style={{maxWidth: "300px"}}>
					<img src={poster} alt="Star Wars poster" className="w-100" />
				</figure>
				<h1 className="text-white-50 text-uppercase">Welcome!</h1>
			</main>
				
		</div>
	)
}
