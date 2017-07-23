import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Sugar', 5),
    new Ingredient('Lemons', 2)
  ];

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient(i: Ingredient) {
    this.ingredients.push(i);
  }
}
