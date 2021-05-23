import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cocktail } from 'src/app/models/cocktail.interface';
import { CocktailsService } from 'src/app/services/cocktails.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit {
  cocktail: Cocktail;

  constructor(
    private cocktailService: CocktailsService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cocktailService.getCocktailById(id).subscribe((drinks) => {
      if (!drinks) {
        return this.router.navigateByUrl('/');
      }

      this.cocktail = drinks.drinks[0];
    });
  }

  back(): void {
    this.location.back();
  }
}
