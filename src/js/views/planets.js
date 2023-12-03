import React from "react";
import "../../styles/home.css";
import Sidebar from "../component/sidebar";
import PlanetsList from "../component/planets-list";

export default function Planets() { 

	return (
		<div className="d-flex w-100">
			<Sidebar />
			<PlanetsList />
				
		</div>
	)
}
