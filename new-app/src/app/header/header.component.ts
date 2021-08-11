import { Component, Output, EventEmitter } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',

})
export class HeaderComponent {

    @Output() whatwillBeShowen = new EventEmitter<string>();
    constructor(private dataStorageService: DataStorageService){}
    onSelect(feature: string){
        this.whatwillBeShowen.emit(feature);
    }

    onSaveData(){
        this.dataStorageService.storeRecipes();
    }

    onFetchData(){
        this.dataStorageService.fetchRecipes().subscribe();
    }

} 