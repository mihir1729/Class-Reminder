import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
	const [classes, setclasses] = useState(data);
	console.log(classes);

	return (
		<main>
			<section className='container'>
				<h2>{classes.length} classes today</h2>
				<List classes={classes} />
				<button onClick={() => setclasses([])}>clear all</button>
			</section>
		</main>
	);
}

export default App;
