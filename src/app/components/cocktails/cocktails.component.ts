import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from 'src/app/models/cocktail.interface';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css'],
})
export class CocktailsComponent implements OnInit {
  cocktails: Cocktail[];
  alcoholic = true;

  constructor(
    private cocktailsService: CocktailsService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.paramMap.get('type');

    if (type === 'alcoholic') {
      this.cocktailsService
        .getAlcoholicCocktails()
        .subscribe((drinks) => (this.cocktails = drinks.drinks));
      this.alcoholic = true;
    }

    if (type === 'no-alcoholic') {
      this.cocktailsService.getNonAlcoholicCocktails().subscribe((drinks) => {
        this.cocktails = drinks.drinks;
      });
      this.alcoholic = false;
    }
  }

  back(): void {
    this.location.back();
  }
}
