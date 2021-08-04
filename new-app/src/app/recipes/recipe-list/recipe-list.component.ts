import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: []
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [];

  // @Output() recipeDetail = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {
    
   }

  ngOnInit(): void {
    this.recipes= this.recipeService.getRecipes();
  }

 /* 
  // using data binding @Input and @Output
  * recipeDetails(recipeDetail: Recipe){
  * this.recipeDetail.emit(recipeDetail)
  * } 
*/

}
