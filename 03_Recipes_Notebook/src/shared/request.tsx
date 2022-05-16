export const fetchRepices = async () => {
  const url = "http://localhost:3000/FavRecipes";
  const request = await fetch(url);
  const response = await request.json();
  return response;
};
