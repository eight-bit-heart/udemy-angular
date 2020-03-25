import { Recipe } from '../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipesService {
  recipeSelected = new Subject<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService){}

  recipes: Recipe[] = [
    new Recipe(
      'Spaghetti',
      'Delicious Pasta',
      'https://storage.needpix.com/rsynced_images/spaghetti-2696723_1280.jpg',
        [
          new Ingredient('noodles', 100),
          new Ingredient('sauce', 2)
        ]
      ),
    new Recipe(
      'Sushi',
      'Yummy rice and raw fishes!',
      'https://cdn.pixabay.com/photo/2017/03/02/20/53/sushi-2112350_960_720.jpg',
        [
          new Ingredient('rice', 150),
          new Ingredient('fish', 3)
        ]
      )
  ];

  selectedRecipe: Recipe;

  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(i: number, recipe: Recipe){
    this.recipes[i] = recipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(i: number) {
    this.recipes.splice(i,1);
    this.recipesChanged.next(this.getRecipes());
  }
}
