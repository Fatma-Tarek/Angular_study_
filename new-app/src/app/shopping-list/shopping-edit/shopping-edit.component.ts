import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  //using Local Reference 
  //@ViewChild('nameInput', {static:true}) ingredientName !: ElementRef;
  //@ViewChild('amountInput', {static:true}) ingredientAmount !: ElementRef;
 // @Output() IngredientAdded = new EventEmitter<Ingredient>(); 
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingList: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingList.startEidting
      .subscribe(
        (index: number)=>{
          this.editedItemIndex = index;
          // To Know I can edit item or not 
          this.editMode = true;
          this.editedItem=this.shoppingList.getIngredientById(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        });
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

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
