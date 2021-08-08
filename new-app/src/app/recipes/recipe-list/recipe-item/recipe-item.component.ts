import { Component, Input, OnInit, Output ,  EventEmitter} from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItems !:Recipe;
  @Input() index !: number;
  //@Output() recipeItem = new EventEmitter<Recipe>();


  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  sendRecipeItem(){
    //this.recipeService.recipeSelected.emit(this.recipeItems);
    this.recipeService.recipeSelected.next(this.recipeItems);
    //  this.recipeItem.emit(this.recipeItems);
  }

}
