import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('Pasta','Pasta from Italy','https://tse3.mm.bing.net/th?id=OIP.2aSGFbADeNNBOy4FCo7myQEyDM&pid=Api&P=0&w=243&h=162'),
    new Recipe('Pasta','Pasta from Italy','https://tse3.mm.bing.net/th?id=OIP.2aSGFbADeNNBOy4FCo7myQEyDM&pid=Api&P=0&w=243&h=162')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
