import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient("Rice", 10),
    new Ingredient("Fish", 3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  getIngredient(i: number){
    return this.ingredients[i];
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  updateIngredient(i: number, ingredient: Ingredient){
    this.ingredients[i] = ingredient;
    this.ingredientsChanged.next(this.getIngredients());
  }

  deleteIngredient(i: number){
    this.ingredients.splice(i, 1);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.getIngredients());
  }

}
