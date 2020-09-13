import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { PagesGuard } from './core/guards/pages.guard';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canActivate: [AuthGuard],canLoad: [AuthGuard] },
  {path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),canActivate: [PagesGuard],canLoad: [PagesGuard] },
  {path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule),canActivate: [PagesGuard],canLoad: [PagesGuard] },
  {path: 'customize', loadChildren: () => import('./features/customize/customize.module').then(m => m.CustomizeModule) ,canActivate: [AuthGuard],canLoad: [AuthGuard]},
  { path: 'cart', loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule), canActivate: [AuthGuard],canLoad: [AuthGuard] },
  { path: 'checkout', loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
