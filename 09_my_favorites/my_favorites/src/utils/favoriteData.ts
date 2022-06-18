import { FavoriteType } from "../components/newFavorite/newFavorite";

// will come from a DB
export const favoriteData: FavoriteType[] = [
	{
		name: "hollow knight",
		imgURL:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXxRAzRufM9qtIQ2qOSdfdxOuUxHVNd9pf6VjGvX0Pe0vDXTwPzYN2zMFrmkaBvHOz9X4&usqp=CAU",
		note: "Incrivel",
		genre: ["Mistério", "TesteGenero"],
		tags: ["Teste", "Teste2"],
	},
	{
		name: "Outer Wilds",
		imgURL:
			"https://cdn1.epicgames.com/salesEvent/salesEvent/OW_Epic_PortraitStorefront_1200x1600-99dad6c305834ce163cabb944d909304",
		note: "Bom",
		genre: ["Romance"],
		tags: ["Teste4", "Teste5"],
	},
	{
		name: "Elden ring",
		imgURL:
			"https://cdn.cdkeys.com/700x700/media/catalog/product/e/l/elden_ring_xbox_one_xbox_series_x_s_uk_1__1.jpg",
		note: "Sem Nota",
		genre: ["Sem Genero"],
		tags: ["Sem Tags"],
	},
];
