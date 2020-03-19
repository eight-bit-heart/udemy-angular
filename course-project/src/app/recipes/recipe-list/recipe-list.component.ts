import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Spaghetti', 'Delicious Pasta', 'https://storage.needpix.com/rsynced_images/spaghetti-2696723_1280.jpg'),
    new Recipe('Sushi', 'Yummy rice and raw fishes!', 'https://cdn.pixabay.com/photo/2017/03/02/20/53/sushi-2112350_960_720.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
