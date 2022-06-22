export type FavoriteType = {
	list: string;
	name: string;
	note: NoteType;
	genre: string[];
	imgURL: string;
	tags: string[];
};

export type NoteType = "Incrivel" | "Bom" | "Normal" | "Ruim" | "Sem Nota";
