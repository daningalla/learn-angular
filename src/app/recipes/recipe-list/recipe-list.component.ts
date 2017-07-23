import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Lemon pie', 'Delicious, tangy, puckering lemon pie.', 'http://assets.kraftfoods.com/recipe_images/opendeploy/73956_640x428.jpg'),
    new Recipe('Cherry pie', 'Tart cherry pie', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/15/0/JI_20731_s4x3.jpg.rend.hgtvcom.616.462.suffix/1492540392350.jpeg')
  ];
  @Output() onRecipeSelectionChanged: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(selection: Recipe){
    this.onRecipeSelectionChanged.emit(selection);
  }
}
