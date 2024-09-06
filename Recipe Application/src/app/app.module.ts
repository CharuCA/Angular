import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterPipe } from './filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodDetailComponent,
    SearchBarComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
