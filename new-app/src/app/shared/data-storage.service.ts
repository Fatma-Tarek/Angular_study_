import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { map, tap } from 'rxjs/operators'
@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService){}
    
    storeRecipes(){
        const urlOfDatabase = 'https://ng-course-recipe-book-61a35-default-rtdb.firebaseio.com/'
        const recipes = this.recipeService.getRecipes();
        const charactersticOfFirebase = 'recipes.json'
        this.http
            .put(urlOfDatabase+ charactersticOfFirebase,
             recipes)
            .subscribe(response => {
                console.log(response);
            });
    }

    fetchRecipes(){
        const urlOfDatabase = 'https://ng-course-recipe-book-61a35-default-rtdb.firebaseio.com/'
        const charactersticOfFirebase = 'recipes.json'
        return this.http
            .get<Recipe[]>(urlOfDatabase+charactersticOfFirebase)
            .pipe(
               /*map((recipes)=>{
                return recipes.map((recipe)=>{
                    return {
                        ...recipe,
                        ingredients: recipe.ingredients ? recipe.ingredients : []
                    }
                })
            }),
                tap( recipes =>{
                    this.recipeService.setRecipes(recipes);
                })*/
                map(recipes => {
                    return recipes.map(recipe => {
                      return {
                        ...recipe,
                        ingredients: recipe.ingredients ? recipe.ingredients : []
                      };
                    });
                  }),
                  tap(recipes => {
                    this.recipeService.setRecipes(recipes);
                  })
            )
            
    }
}