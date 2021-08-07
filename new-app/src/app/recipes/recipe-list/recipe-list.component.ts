import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {
    
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


navigateToNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
}
}
