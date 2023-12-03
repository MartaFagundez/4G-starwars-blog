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

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column justify-content-center bg-sw-black min-vh-100">
			<BrowserRouter basename={basename}>
				<CharactersContextProvider>
					<PlanetsContextProvider>
						<ScrollToTop>
							<Navbar />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/characters" element={<Characters />} />
								<Route path="/characters/:id" element={<CharacterDetail />} />
								<Route path="*" element={<h1>Not found!</h1>} />
							</Routes>
							<Footer />
						</ScrollToTop>
					
					</PlanetsContextProvider>	
				</CharactersContextProvider>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
