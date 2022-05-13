import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe('A test recipe', 'this is simply a test', 'https://glutenfreeandmore.com/wp-content/uploads/2022/05/Strawberry-and-Mango-Sorbet-Recipe.jpg'),
    new Recipe('A test recipe', 'this is simply a test', 'https://glutenfreeandmore.com/wp-content/uploads/2022/05/Strawberry-and-Mango-Sorbet-Recipe.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
