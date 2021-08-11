import { Injectable, EventEmitter} from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    //recipeSelected = new EventEmitter<Recipe>();
    recipeSelected = new Subject<Recipe>();
    recipeChanged = new Subject<Recipe[]>();
    constructor(private shoppingList: ShoppingListService){}
    

    private recipesdd:Recipe[] = [
        new Recipe('Pasta','Pasta from Italy','https://tse3.mm.bing.net/th?id=OIP.2aSGFbADeNNBOy4FCo7myQEyDM&pid=Api&P=0&w=243&h=162',[new Ingredient('Meat',1) , new Ingredient('French Fries',20)]),
        new Recipe('Paste','German Pasta','https://tse3.mm.bing.net/th?id=OIP.2aSGFbADeNNBOy4FCo7myQEyDM&pid=Api&P=0&w=243&h=162', [new Ingredient('Meat',1) , new Ingredient('French Fries',20)])
      ];
    

      private recipes:Recipe[] =[];

      setRecipes(recipes: Recipe[]){
          this.recipes = recipes;
          this.recipeChanged.next(this.recipes.slice());
      }

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
            this.shoppingList.addIngredients(ingredients);
      }

      getRecipeDetails(id: number){
         return  this.recipes[id];
      }

      addRecipe(recipe: Recipe){
          this.recipes.push(recipe);
          this.recipeChanged.next(this.recipes.slice())
      }

      updateRecipe(index: number, newRecipe: Recipe){
          this.recipes[index] = newRecipe;
          this.recipeChanged.next(this.recipes.slice())
      }


      onDelete(index: number){
          this.recipes.splice(index,1);
          this.recipeChanged.next(this.recipes.slice())
      }

}