import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Our One-Millionth Recipe Box</h1>
      <h3>{{month}}/{{day}}/{{year}}</h3>
      <ul>
        <li [class]="priorityColor(currentRecipe)" (click)="showDetail(currentRecipe)" *ngFor="let currentRecipe of recipes">{{currentRecipe.title}}<button (click)="editRecipe(currentRecipe)">Edit!</button></li>
      </ul>
      <hr>
      <div *ngIf="selectedRecipe">
        <h3>{{selectedRecipe.title}}</h3>
        <p>Recipe Complete? {{selectedRecipe.cooked}}</p>
        <h3>Edit Recipe</h3>
        <label>Enter Recipe Title:</label>
        <input [(ngModel)]="selectedRecipe.title">
        <br>
        <label>Enter Recipe Ingredients:</label>
        <input [(ngModel)]="selectedRecipe.ingredients">
        <br>
        <label>Enter Recipe Instructions:</label>
        <input [(ngModel)]="selectedRecipe.instructions">
        <br>
        <label>Enter Recipe Priority (1-3):</label>
        <br>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="1">1 (Low Priority)<br>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="2">2 (Medium Priority)<br>
        <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="3">3 (High Priority)
        <br>
        <button (click)="finishedEditing()">Done</button>
      </div>

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
  recipes: Recipe[] = [
    new Recipe('Mac and Cheese', 'Macaroni and Cheese', 'Bowl water and cook the Macaroni and add the cheese', 3),
    new Recipe('PP and J sandwich', 'Bread, Peanut butter, and Jelly', 'Spread peanut butter on one slice and jelly on the other', 2)
  ];
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  hideDetail() {
    this.detailedRecipe = null;
  }

  showDetail(clickedRecipe) {
    this.detailedRecipe = clickedRecipe;
  }

  priorityColor(currentRecipe){
    if (currentRecipe.priority === 3){
      return "bg-danger";
    } else if (currentRecipe.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }
}

export class Recipe {
  public cooked: boolean = false;
  constructor(public title: string, public ingredients: string, public instructions: string, public priority: number) {}
}
