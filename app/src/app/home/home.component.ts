import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { PeriodicElement } from '../types/periodic-element';
import { TableWithFilterComponent } from './components/table-with-filter/table-with-filter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  sideNavOpen: boolean = false;

  @ViewChild(TableWithFilterComponent) periodicTable! : TableWithFilterComponent;

  elementAdded(element: PeriodicElement) {
    this.periodicTable.addElement(element);
  }
}
