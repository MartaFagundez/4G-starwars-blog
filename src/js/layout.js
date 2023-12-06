import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home  from "./views/home";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CharactersContextProvider } from "./contexts/characters-context";
import { PlanetsContextProvider } from "./contexts/planets-context";
import Characters from "./views/characters";
import CharacterDetail from "./views/character-detail";
import Planets from "./views/planets";
import PlanetDetail from "./views/planet-detail";

import stars from "../img/stars.png";
import twinkling from "../img/twinkling.png";
import { FavoritesContextProvider } from "./contexts/favorites-context";
import Favorites from "./views/favorites";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container-fluid d-flex flex-column align-items-center w-100 min-vh-100 position-relative m-0 p-0" >
			<div className="stars z-0" style={{background: `#010b13 url(${stars}) repeat top center`}}></div>
			<div className="twinkling z-1" style={{background: `transparent url(${twinkling}) repeat top center`}}></div>
			<div className="d-flex flex-column align-items-center min-vh-100 z-3 w-100">
				<BrowserRouter basename={basename}>
					<FavoritesContextProvider>
						<CharactersContextProvider>
							<PlanetsContextProvider>
								<ScrollToTop>
									<Navbar />
									<Routes>
										<Route path="/" element={<Home />} />
										<Route path="/characters" element={<Characters />} />
										<Route path="/characters/:id" element={<CharacterDetail />} />
										<Route path="/planets" element={<Planets />} />
										<Route path="/planets/:id" element={<PlanetDetail />} />
										<Route path="/favorites" element={<Favorites />} />
										<Route path="*" element={<h1>Not found!</h1>} />
									</Routes>
									<Footer />
								</ScrollToTop>	
							</PlanetsContextProvider>	
						</CharactersContextProvider>
					</FavoritesContextProvider>
				</BrowserRouter>
			</div>
		</div>
	);
};

export default Layout;
