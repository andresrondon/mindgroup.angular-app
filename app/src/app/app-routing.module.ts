import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoremIpsumComponent } from './modules/lorem-ipsum/lorem-ipsum.component';
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./modules/home/home.module').then(mod => mod.HomeModule),
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
