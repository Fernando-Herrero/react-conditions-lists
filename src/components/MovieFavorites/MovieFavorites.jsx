import { useState } from "react";
import "./MovieFavorites.css";

const movies = [
	{ id: 1, title: "El laberinto del fauno" },
	{ id: 2, title: "Mar adentro" },
	{ id: 3, title: "Ocho apellidos vascos" },
];

export const MovieFavorites = () => {
	const [moviesState, setMoviesState] = useState(movies);
	const [favorites, setFavorites] = useState([]);

	const onAddFavorite = (id) => {
		const favoriteMovie = moviesState.find((movie) => movie.id === id);

		const filteredMovies = moviesState.filter((movie) => movie.id !== id);

		setMoviesState(filteredMovies);
		setFavorites((prev) => [...prev, favoriteMovie]);
	};

	const onRemoveFavorite = (id) => {
		const unfavoriteMovie = favorites.find((movie) => movie.id === id);

		const filteredMovies = favorites.filter((movie) => movie.id !== id);

		setFavorites(filteredMovies);
		setMoviesState((prev) => [...prev, unfavoriteMovie]);
	};

	return (
		<div className="movies-container">
			<section className="movies-list-container">
				<h1>Movies:</h1>
				<ul className="movies-list">
					{moviesState.length === 0 && <p className="no-movies-message">There isn't any movie in the list</p>}
					{moviesState.map(({ id, title }) => (
						<li key={id}>
							<h4>Title: {title}</h4>
							<button onClick={() => onAddFavorite(id)}>🤍</button>
						</li>
					))}
				</ul>
			</section>

			<section className="favorite-movies-list">
				<h1>Favorite Movies:</h1>
				{favorites.length === 0 && <p className="no-movies-message">There isn't any movie in the list</p>}
				{favorites.length > 0 && (
					<ul className="movies-list">
						{favorites.map(({ id, title }) => (
							<li key={id}>
								<h4>Title: {title}</h4>
								<button onClick={() => onRemoveFavorite(id)}>❤️</button>
							</li>
						))}
					</ul>
				)}
			</section>
		</div>
	);
};
