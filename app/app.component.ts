import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Our One-Millionth Recipe Box</h1>
      <h3>{{month}}/{{day}}/{{year}}</h3>
      <recipe-list [childRecipeList]="masterRecipeList" (clickSender)="editRecipe($event)"></recipe-list>
      <hr>
      <edit-recipe [childSelectedRecipe]="selectedRecipe" (doneButtonClickedSender)="finishedEditing()"></edit-recipe>
      <new-recipe (newRecipeSender)="addRecipe($event)"></new-recipe>

      <div *ngIf="detailedRecipe">
        <h3>{{detailedRecipe.title}}</h3>
        <p>{{detailedRecipe.ingredients}}</p>
        <p>{{detailedRecipe.instructions}}</p>

        <button (click)="hideDetail()">Hide Detail</button>
      </div>
    </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedRecipe = null;

  masterRecipeList: Recipe[] = [
    new Recipe('Mac and Cheese', 'Macaroni and Cheese', 'Bowl water and cook the Macaroni and add the cheese', 3),
    new Recipe('PP and J sandwich', 'Bread, Peanut butter, and Jelly', 'Spread peanut butter on one slice and jelly on the other', 2)
  ];

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  addRecipe(newRecipeFromChild: Recipe) {
    this.masterRecipeList.push(newRecipeFromChild);
  }

  hideDetail() {
    this.detailedRecipe = null;
  }

  showDetail(clickedRecipe) {
    this.detailedRecipe = clickedRecipe;
  }
}
