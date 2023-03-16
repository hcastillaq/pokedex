export interface Pokemon {
	name: string;
	id: number;
	height: number;
	weight: number;
	region: string;
	stats: Stat[];
	image: string;
	color: string;
	types: string[];
}

export interface Stat {
	name: string;
	value: number;
}
