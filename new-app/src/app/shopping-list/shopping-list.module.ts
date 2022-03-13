import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        //CommonModule, //ngIF, ngFor
        FormsModule,
        RouterModule.forChild([
            { path: 'shoppinglist',  component: ShoppingListComponent},
        ]),
        SharedModule
      ],

      
})
export class ShoppingListModule{

}