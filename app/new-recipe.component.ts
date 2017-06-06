import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'new-recipe',
  template: `
    <h1>New Recipe</h1>
    <div>
      <label>Enter Recipe Title:</label>
      <input #newTitle>
      <label>Enter Recipe Ingredients:</label>
      <input #newIngredients>
      <label>Enter Recipe Instructions:</label>
      <input #newInstructions>
    </div>
    <div>
      <label>Recipe Priority:</label>
      <select #newPriority>
        <option [value]="1"> Low Priority </option>
        <option [value]="2"> Medium Priority </option>
        <option [value]="3"> High Priority </option>
      </select>
      <button (click)="submitForm(newTitle.value, newIngredients.value, newInstructions.value, newPriority.value)">Add</button>
    </div>
  `
})

export class NewRecipeComponent {
  @Output() newRecipeSender = new EventEmitter();
  
  submitForm(title: string, ingredients: string, instructions: string, priority: number) {
    var newRecipeToAdd: Recipe = new Recipe(title, ingredients, instructions, priority);
  }
}
