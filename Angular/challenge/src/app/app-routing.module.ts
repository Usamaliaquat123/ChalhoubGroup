import { CategoryComponent } from './containers/category/category.component';
import { HomeComponent } from './containers/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './shared-components/post-detail/post-detail.component';
import { NotFoundComponentComponent } from './shared-components/not-found-component/not-found-component.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'category/:cat', component: CategoryComponent },
    { path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {}
