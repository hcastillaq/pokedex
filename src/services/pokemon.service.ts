import { Pokemon } from "../interfaces";

export const pokemonService = {
	getByNameOrRandom: async (nameOrId?: string): Promise<Pokemon> => {
		let path = "https://pokeapi.co/api/v2/pokemon";
		if (!nameOrId) {
			path += `/${Math.floor(Math.random() * 1008)}`;
		} else {
			path += `/${nameOrId}`;
		}

		const response = await fetch(path);
		const res = await response.json();

		const responseSpecies = await fetch(res.species.url);
		const species = await responseSpecies.json();

		const officialSprite = res.sprites.other["official-artwork"].front_default;

		const stats = res.stats.map(
			(stat: { [key: string]: { [key: string]: string } }) => {
				return {
					name: stat.stat.name,
					value: stat.base_stat,
				};
			},
		);

		const types = res.types.map(
			(type: { [key: string]: { [key: string]: string } }) => {
				return type.type.name;
			},
		);

		return {
			id: res.id,
			name: res.name,
			image: officialSprite,
			height: res.height,
			weight: res.weight,
			color: species.color.name,
			region: "kanto",
			stats,
			types,
		};
	},
};
