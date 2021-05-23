import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail, Drink } from '../models/cocktail.interface';

@Injectable({
  providedIn: 'root',
})
export class CocktailsService {
  constructor(private http: HttpClient) {}

  getAlcoholicCocktails(): Observable<Drink> {
    return this.http.get<Drink>(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
    );
  }

  getNonAlcoholicCocktails(): Observable<Drink> {
    return this.http.get<Drink>(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    );
  }

  getCocktailById(id: string): Observable<Drink> {
    return this.http.get<Drink>('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
  }
}
