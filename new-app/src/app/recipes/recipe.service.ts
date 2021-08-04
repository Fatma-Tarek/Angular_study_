import { Injectable, EventEmitter} from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    constructor(private shoppingList: ShoppingListService){}
    
    private recipes:Recipe[] = [
        new Recipe('Pasta','Pasta from Italy','https://tse3.mm.bing.net/th?id=OIP.2aSGFbADeNNBOy4FCo7myQEyDM&pid=Api&P=0&w=243&h=162',[new Ingredient('Meat',1) , new Ingredient('French Fries',20)]),
        new Recipe('Paste','German Pasta','https://tse3.mm.bing.net/th?id=OIP.2aSGFbADeNNBOy4FCo7myQEyDM&pid=Api&P=0&w=243&h=162', [new Ingredient('Meat',1) , new Ingredient('French Fries',20)])
      ];

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
            this.shoppingList.addIngredients(ingredients);
      }


}