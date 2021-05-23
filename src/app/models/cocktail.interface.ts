export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
}

export interface Drink {
  drinks: Cocktail[];
}
