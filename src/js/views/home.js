import React from "react";
import "../../styles/home.css";
import { useCharactersContext } from "../contexts/characters-context";

export default function Home() { 
	const {store: charactersStore, actions} = useCharactersContext();

	return (
		<div className="d-flex w-100">
			<div className="sidebar">
				<nav>
					<ul className="text-white-50">
						<li>Characters</li>
						<li>Planets</li>
					</ul>
				</nav>
			</div>

			<main>
				<ul>
					<li>
						{/* Card */}
						<div className="card bg-dark shadow" style={{width: "14rem"}}>
							<figure className="card-img-top d-flex overflow-hidden border-bottom border-warning" style={{height: "14rem"}}>
								<img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="w-100" alt="Name" style={{objectFit: "cover"}} />
							</figure>
							<div className="card-body">
								<h5 className="card-title text-white text-uppercase">{charactersStore.characters.length > 0 ? charactersStore.characters[0].name : "Cargando..."}</h5>
								<p className="card-text text-white-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
								<div className="d-flex justify-content-between">
									<a href="#" className="btn px-0"><i className="fa-regular fa-heart text-warning fs-5"></i></a>
									<a href="#" className="btn btn-outline-warning">See More</a>
								</div>
							</div>
						</div>
					</li>
				</ul>
				
			</main>
		</div>
	)
}
