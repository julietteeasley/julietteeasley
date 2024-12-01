import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SnowComponent} from "../components/snow/snow.component";
import { WishListComponent} from "../components/wish-list/wish-list.component";

@NgModule({
  declarations: [
    AppComponent,
    SnowComponent,
    WishListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
