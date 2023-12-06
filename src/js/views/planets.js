import React from "react";
import "../../styles/home.css";
import Sidebar from "../component/sidebar";
import PlanetsList from "../component/planets-list";
import { usePlanetsContext } from "../contexts/planets-context";

export default function Planets() { 
	const {store} = usePlanetsContext();

	return (
		<div className="container-fluid d-flex w-100" style={{maxWidth: "1400px"}}>
			<Sidebar />
			<PlanetsList planets={store.planets}/>
				
		</div>
	)
}
