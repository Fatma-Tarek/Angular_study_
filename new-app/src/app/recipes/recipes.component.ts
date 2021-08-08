import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeDetails !: Recipe;
  recipeSelect = false
  constructor(private recipeService: RecipeService) { 
    this.recipeService.recipeSelected
      .subscribe(
        (recipe: Recipe) => {
          this.recipeDetails = recipe;
          this.recipeSelect = true;
        }
      );
  }

  ngOnInit() {   }

  showRecipeDetails(recipeDtails: Recipe){
    this.recipeDetails = recipeDtails;
    this.recipeSelect = true;
    }

}
