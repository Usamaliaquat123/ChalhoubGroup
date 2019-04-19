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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import {MatDialogModule} from '@angular/material/dialog'
import {MatButtonModule} from '@angular/material/button';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import { ModalComponent } from './shared-components/modal/modal.component';
import { TrendingNewsComponent } from './shared-components/trending-news/trending-news.component';
import { PostDetailComponent } from './shared-components/post-detail/post-detail.component';
import { NotFoundComponentComponent } from './shared-components/not-found-component/not-found-component.component';
import { Router, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { CategoryComponent } from './containers/category/category.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    BarComponent,
    HeaderNavigatorComponent,
    SliderComponent,
    CategoriesComponent,
    MomentCustomPipe,
    FromNowPipe,
    ModalComponent,
    TrendingNewsComponent,
    PostDetailComponent,
    NotFoundComponentComponent,
    HomeComponent,
    CategoryComponent
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ScrollDispatchModule,
    InfiniteScrollModule ,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  