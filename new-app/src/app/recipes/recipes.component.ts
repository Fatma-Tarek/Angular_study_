import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeDetails !: Recipe;
  recipeSelect = false
  constructor() { }

  ngOnInit(): void {
  }

  showRecipeDetails(recipeDtails: Recipe){
    this.recipeDetails = recipeDtails;
    this.recipeSelect = true;
    }

}
