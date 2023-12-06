import React from "react";
import "../../styles/home.css";
import Sidebar from "../component/sidebar";
import CharactersList from "../component/characters-list";
import { useCharactersContext } from "../contexts/characters-context";

export default function Characters() { 
	const {store} = useCharactersContext();

	return (
		<div className="container-fluid d-flex w-100" style={{maxWidth: "1400px"}}>
			<Sidebar />
			<CharactersList characters={store.characters}/>
				
		</div>
	)
}
