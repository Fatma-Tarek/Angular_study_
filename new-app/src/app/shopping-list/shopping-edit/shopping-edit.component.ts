import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //using Local Reference 
  //@ViewChild('nameInput', {static:true}) ingredientName !: ElementRef;
  //@ViewChild('amountInput', {static:true}) ingredientAmount !: ElementRef;
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
  /*addNewIngredient(){
    //coming from local reference and @ViewChild
    const newIngredient = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value);
    this.shoppingList.addNewIngredient(newIngredient)
  }*/


  //using Forms 
  onAddItem(form: NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name,value.amount);
    this.shoppingList.addNewIngredient(newIngredient)
  }

}
