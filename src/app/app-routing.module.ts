import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) }, { path: 'register', loadChildren: () => import('./features/register/register.module').then(m => m.RegisterModule) }, { path: 'customize', loadChildren: () => import('./features/customize/customize.module').then(m => m.CustomizeModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
