import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrderListComponent } from './pages/order-list/order-list.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'orders',component:OrderListComponent},
  {path:'detail',component:OrderDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }