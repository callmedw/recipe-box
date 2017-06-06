import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Our One-Millionth Recipe Box</h1>
      <h3>{{month}}/{{day}}/{{year}}</h3>
      <ul>
        <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}} - {{currentRecipe.ingredients}} - {{currentRecipe.instructions}}</li>
      </ul>
    </div>
  `
})

export class AppComponent {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  recipes: Recipe[] = [
    new Recipe('Mac and Cheese', 'Macaroni and Cheese', 'Bowl water and cook the Macaroni and add the cheese'),
    new Recipe('PP and J sandwich', 'Bread, Peanut butter, and Jelly', 'Spread peanut butter on one slice and jelly on the other')
  ];
}

class Recipe {
  constructor(public title: string, public ingredients: string, public instructions: string) {}
}
