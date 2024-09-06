import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../food.service';

interface Food {
  name: string;
  image: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  ingredients: string[];
  instructions: string[];
  tags: string[];
}

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.css'],
})
export class FoodDetailComponent implements OnInit {
  food: Food | null = null;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.foodService.getFood(id).subscribe(
      (data) => {
        this.food = data;
      },
      (error) => {
        console.error('Error fetching food details:', error);
      }
    );
  }
}
