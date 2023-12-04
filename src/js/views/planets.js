import React from "react";
import "../../styles/home.css";
import Sidebar from "../component/sidebar";
import PlanetsList from "../component/planets-list";

export default function Planets() { 

	return (
		<div className="container-fluid d-flex w-100" style={{maxWidth: "1400px"}}>
			<Sidebar />
			<PlanetsList />
				
		</div>
	)
}
