import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/foods', pathMatch: 'full' },
  { path: 'foods', component: FoodListComponent },
  { path: 'foods/:id', component: FoodDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
