import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setLoading, setPokemon } from "../../redux/store";
import { pokemonService } from "../../services/pokemon.service";
import search from "./../../assets/search.png";
import styles from "./Search.module.scss";

const Search = () => {
	const dispatch = useAppDispatch();
	const searchInput = useRef<HTMLInputElement>(null);
	const loading = useAppSelector((state) => state.app.loading);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const form = e.target as HTMLFormElement;
		const pokemon: string = String(form.pokemon.value)
			.toLocaleLowerCase()
			.trim();
		getPokemon(pokemon);
	};

	const getPokemon = async (pokemon?: string) => {
		dispatch(setLoading(true));
		if (!pokemon) searchInput.current!.value = "";
		try {
			const res = await pokemonService.getByNameOrRandom(pokemon || undefined);
			dispatch(setPokemon(res));
		} catch (error) {
			console.log(error);
		}
		setTimeout(() => dispatch(setLoading(false)), 500);
	};

	useEffect(() => {
		getPokemon();

		return () => {};
	}, []);

	return (
		<div className={styles.search_container}>
			<div className={styles.search}>
				<form onSubmit={handleSubmit}>
					<input
						name="pokemon"
						type="text"
						placeholder="Name or number"
						ref={searchInput}
						disabled={loading}
					/>

					<button type="submit" disabled={loading}>
						<img src={search} alt="search" />
					</button>
				</form>
			</div>

			<button
				type="button"
				className={`${styles.random} ${loading ? styles.loading : ""}`}
				disabled={loading}
				onClick={() => {
					getPokemon();
				}}
			>
				{loading ? <img alt="loading" src="/pokeball.svg" /> : "⚄"}
			</button>
		</div>
	);
};

export default Search;