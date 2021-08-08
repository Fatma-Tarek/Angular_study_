import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  private idChangeSub: Subscription;
  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingList.getIngredients();
    this.idChangeSub =this.shoppingList.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    /*this.shoppingList.addIngredient.subscribe(
      (ingredient: Ingredient)=>{ this.shoppingList.addNewIngredient(ingredient)}
    );*/
  }

 /*
    addIngredientToOurs(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  } */

  ngOnDestroy(){
    this.idChangeSub.unsubscribe();
  }

}
