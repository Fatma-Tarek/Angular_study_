import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails !:Recipe;
  constructor(private recipeService: RecipeService) { }
  statusOfDropDown= false;

  ngOnInit(): void {
  }

  changeStatusDropdown(){
    this.statusOfDropDown= !this.statusOfDropDown
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeDetails.ingredients);
  }
  

}
