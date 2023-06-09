import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

import { StoreModule } from '@ngrx/store';
import { colorReducer } from './state/color.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    StoreModule.forRoot({ color: colorReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
