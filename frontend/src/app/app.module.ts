import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './components/pages/home/home.component';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/partials/search/search.component';
import { TagsComponent } from './components/partials/tags/tags.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partials/title/title.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, SearchComponent, TagsComponent, FoodPageComponent, CartPageComponent, TitleComponent, NotFoundComponent], // Declare components here
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    RatingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap the app
})
export class AppModule {}
