import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home.component';
import { TableWithFilterComponent } from './components/table-with-filter/table-with-filter.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { HomeService } from './services/home.service';
import { MatInputModule } from '@angular/material/input';

const homePageRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    TableWithFilterComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homePageRoutes),
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    HomeService
  ],
})
export class HomeModule { }
