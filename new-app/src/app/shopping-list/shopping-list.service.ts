import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingListService {
  

   private ingredients: Ingredient[] = [
        new Ingredient('Apples',5) ,
        new Ingredient('Tomatoes', 10)
      ];

    // because we send a slice so a copy array not affected 
    // so we added event Emitter in class to resend in again 
    // to shopping list
    ingredientChanged = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    addNewIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addNewIngredient(ingredient)
        // }
        //using ES6 to spread array into list
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

}