import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetails !:Recipe;
  id: number
  constructor(private recipeService: RecipeService, 
              private route: ActivatedRoute,
              private router: Router) { }
  statusOfDropDown= false;

  ngOnInit(): void {
    
    this.route.params
        .subscribe((params: Params)=>{
          this.id = +params['id'];
          this.recipeDetails = this.recipeService.getRecipeDetails(+this.id);
        });
  
  }

  changeStatusDropdown(){
    this.statusOfDropDown= !this.statusOfDropDown
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipeDetails.ingredients);
  }
  /*
  getDetailsOfRecipe(){
    const id = this.route.snapshot.params['id'];
    this.recipeDetails = this.recipeService.getRecipeDetails(+id);
  }
  */

  navigateToEditPage(){
      this.router.navigate(['edit'], {relativeTo: this.route})
     // this.router.navigate(['../',this.route.snapshot.params['id'], 'edit' ], {relativeTo: this.route})
     // this.router.navigate(['../',this.id,'edit'], {relativeTo: this.route})
  }

}
