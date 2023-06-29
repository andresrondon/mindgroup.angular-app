import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoremIpsumComponent } from './lorem-ipsum/lorem-ipsum.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    pathMatch: 'full'
  },
  { path: 'lorem-ipsum', component: LoremIpsumComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
