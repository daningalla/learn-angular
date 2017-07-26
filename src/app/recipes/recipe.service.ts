import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(1, 'Lemon pie', 'Delicious, tangy, puckering lemon pie.',
      'http://assets.kraftfoods.com/recipe_images/opendeploy/73956_640x428.jpg',
      [
        new Ingredient('Lemons', 5),
        new Ingredient('Sugar', 10),
        new Ingredient('Eggs', 2)
      ]),
    new Recipe(2, 'Cherry pie', 'Tart cherry pie',
      'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/15/0/' +
      'JI_20731_s4x3.jpg.rend.hgtvcom.616.462.suffix/1492540392350.jpeg',
      [
        new Ingredient('Cherries', 50),
        new Ingredient('Shortening', 2),
        new Ingredient('Flour', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    for (const r of this.recipes){
      if (r.id === id) {
        return r;
      }
    }
    return undefined;
  }

  getNextRecipeId() {
    return this.recipes.length + 1;
  }
}
