import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/sw-logo.png";
import { useFavoritesContext } from "../contexts/favorites-context";

export function Navbar()  {
	const {store, actions} = useFavoritesContext();

	const totalFavorites = store.characters.length + store.planets.length;

	return (
		<>
			<nav className="navbar navbar-dark bg-dark w-100">
				<div className="container-fluid d-flex justify-content-between w-100" style={{maxWidth: "1400px"}}>
					{/* Logo */}
					<Link to="/">
						<figure className="navbar-brand d-flex m-0 p-0" style={{width: "100px"}}>
							<img src={logo} alt="logo" className="w-100" />
						</figure>
					</Link>

					<ul className="navbar-nav mb-2 mb-lg-0">
							{/* Favorites */}
							<li className="nav-item">
								<Link className="nav-link position-relative me-4" to="/favorites">Favorites <span className="position-absolute translate-middle badge rounded-pill bg-danger" style={{top: "0.5rem", right: "-2rem"}}>
									{totalFavorites}
									<span className="visually-hidden">favorites</span>
								</span>
								</Link>
							</li>
					</ul>
				</div>
			</nav>
		</>
	);
};
