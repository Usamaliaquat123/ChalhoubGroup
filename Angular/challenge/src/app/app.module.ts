import { FromNowPipe } from './pipes/momentCustom/from-now.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './shared-components/buttons/buttons.component';
import { BarComponent } from './shared-components/bar/bar.component';
import { HeaderNavigatorComponent } from './shared-components/header-navigator/header-navigator.component';
import { SliderComponent } from './shared-components/slider/slider.component';
import { CategoriesComponent } from './shared-components/categories/categories.component';
import { MomentCustomPipe } from './pipes/date/moment-custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    BarComponent,
    HeaderNavigatorComponent,
    SliderComponent,
    CategoriesComponent,
    MomentCustomPipe,
    FromNowPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
