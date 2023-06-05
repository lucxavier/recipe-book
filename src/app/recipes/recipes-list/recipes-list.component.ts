import { Component } from '@angular/core';
import { Recipe } from '../recipes.module';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG'
    ),
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg'
    ),
    new Recipe(
      'Slow Cooker Pizza',
      'What else you need to say?',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpNWfJQJHnxZhO4n0KWv_sQbWnSP4vTJymD2CpyeRxbQ9C1g8Yvsvo&usqp=CAE&s'
    ),
  ];
}
