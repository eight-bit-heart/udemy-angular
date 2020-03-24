import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
  }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement){
    if(name.value.length > 0 && amount.value.length > 0){
      this.shoppingListService.addIngredient(new Ingredient(name.value, amount.valueAsNumber));
    }
  }
}
