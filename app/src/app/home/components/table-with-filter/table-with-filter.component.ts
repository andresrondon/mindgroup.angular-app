import {Component} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PeriodicElement } from 'src/app/types/periodic-element';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-table-with-filter',
  templateUrl: './table-with-filter.component.html',
  styleUrls: ['./table-with-filter.component.scss']
})
export class TableWithFilterComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<PeriodicElement>;

  constructor(private service: HomeService) { 
    this.dataSource = new MatTableDataSource(this.service.getTableDate());
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
