import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f', {static: true}) slForm: NgForm;

  startedEditingSubscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.startedEditing.subscribe(
      (i: number) => {
        this.editMode = true;
        this.editedItemIndex = i;
        this.editedItem = this.shoppingListService.getIngredient(i);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  ngOnDestroy(): void {
    if(this.startedEditingSubscription){
      this.startedEditingSubscription.unsubscribe();
    }
  }

  onSubmit(){
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, new Ingredient(this.slForm.value.name, this.slForm.value.amount));
    }else{
      this.shoppingListService.addIngredient(new Ingredient(this.slForm.value.name, this.slForm.value.amount));
    }
    this.editMode = false;
    this.slForm.reset();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
    this.slForm.reset();
  }
}
