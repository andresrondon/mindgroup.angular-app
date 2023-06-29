import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule, } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
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
    SideNavComponent,
    TableWithFilterComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(homePageRoutes),
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [
    HomeService
  ],
})
export class HomeModule { }
