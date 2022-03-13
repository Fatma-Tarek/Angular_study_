import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthInterceptorsService } from "./auth/auth-interceptor.service";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
// you don't need to export your services bs.
// services are automatically injected in the root 
// you don't need to export them to make this happen 

@NgModule({
    providers: [
        ShoppingListService,
        RecipeService, 
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorsService,
      multi: true
    }],
    
})
export class CoreModule{}