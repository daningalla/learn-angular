import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from 'app/recipes/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html'
})
export class RecipeEditComponent implements OnInit {
  recipe: Recipe;
  editMode = false;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        const editMode = params['id'] != null;
        if (editMode){
          this.recipe = this.recipeService.getRecipeById(id);
        } else {
          this.recipe = new Recipe(
            this.recipeService.getNextRecipeId(),
            '(New Recipe)',
            '',
            '',
            []
          );
        }
        this.editMode = editMode;
      }
    );
  }
}
