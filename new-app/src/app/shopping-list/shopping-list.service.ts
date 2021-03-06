import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

@Injectable()
export class ShoppingListService {
  startEidting = new Subject<number>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apples',5) ,
        new Ingredient('Tomatoes', 10)
      ];

    // because we send a slice so a copy array not affected 
    // so we added event Emitter in class to resend in again 
    // to shopping list
    //ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientChanged = new Subject<Ingredient[]>();  
    getIngredients(){
        return this.ingredients.slice();
    }

    addNewIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        // for eventEmitter
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //     this.addNewIngredient(ingredient)
        // }
        //using ES6 to spread array into list
        this.ingredients.push(...ingredients);
        //For Event Emitter
        //this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
    }

    getIngredientById(index: number){
        return this.ingredients[index];
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredientFromShoppingList(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientChanged.next(this.ingredients.slice());
    }

}