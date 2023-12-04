import React from "react";
import "../../styles/home.css";
import Sidebar from "../component/sidebar";
import CharactersList from "../component/characters-list";

export default function Characters() { 

	return (
		<div className="container-fluid d-flex w-100" style={{maxWidth: "1400px"}}>
			<Sidebar />
			<CharactersList />
				
		</div>
	)
}
