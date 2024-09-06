import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';

interface Food {
  id: number;
  name: string;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
})
export class FoodListComponent implements OnInit {
  foods: Food[] = []; // Array to hold the list of food items
  searchQuery: string = ''; // String to hold the search query

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.loadFoods();
  }

  loadFoods(): void {
    this.foodService.getFoods().subscribe((data) => {
      this.foods = data.recipes;
    });
  }
}
