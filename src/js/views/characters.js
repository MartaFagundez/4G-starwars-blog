import React from "react";
import "../../styles/home.css";
import Sidebar from "../component/sidebar";
import CharactersList from "../component/characters-list";

export default function Characters() { 

	return (
		<div className="d-flex w-100">
			<Sidebar />
			<CharactersList />
				
		</div>
	)
}
