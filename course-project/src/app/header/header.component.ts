import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() navClicked = new EventEmitter<String>();

  recipeClicked(){
    this.navClicked.emit("recipes");
  }

  shoppingListClicked(){
    this.navClicked.emit("shopping-list");
  }
}
