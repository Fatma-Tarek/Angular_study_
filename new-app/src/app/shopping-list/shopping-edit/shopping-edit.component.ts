import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model'


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static:true}) ingredientName !: ElementRef;
  @ViewChild('amountInput', {static:true}) ingredientAmount !: ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>(); 

  constructor() { }

  ngOnInit(): void {
  }

  addNewIngredient(){
    //console.log(this.ingredientName.nativeElement.value);
    const newIngredient = new Ingredient(this.ingredientName.nativeElement.value,this.ingredientAmount.nativeElement.value);
    this.IngredientAdded.emit(newIngredient)
  }



}
