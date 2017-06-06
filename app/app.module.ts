import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { RecipeListComponent }  from './recipe-list.component';
import { EditRecipeComponent } from './edit-recipe.component';
import { NewRecipeComponent } from './new-recipe.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, RecipeListComponent, EditRecipeComponent, NewRecipeComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
