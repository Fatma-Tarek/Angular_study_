import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:true}) ingredientName !: ElementRef;
  @ViewChild('amountInput', {static:true}) ingredientAmount !: ElementRef;
 // @Output() IngredientAdded = new EventEmitter<Ingredient>(); 

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
  }

  /****** Add new Ingredient using @ Output and @ Input  */
  // addNewIngredient(){
  //   //console.log(this.ingredientName.nativeElement.value);
  //   const newIngredient = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value);
  //   this.IngredientAdded.emit(newIngredient)
  // }

  /****** add new Ingredient using cross component */
  addNewIngredient(){
    const newIngredient = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value);
    this.shoppingList.addNewIngredient(newIngredient)
  }


}
