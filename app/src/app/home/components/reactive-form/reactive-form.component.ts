import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { PeriodicElement } from 'src/app/types/periodic-element';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  form = this.fb.group({
    position: [0, Validators.required],
    name: ['', Validators.required],
    weight: [0, Validators.required],
    symbol: ['', Validators.required]
  });

  @Output() elementAdded = new EventEmitter<PeriodicElement>();

  constructor(private fb: FormBuilder) { }

  addPeriodicElement() {
    this.elementAdded.emit({
      position: <number>this.form.controls.position.value,
      name: <string>this.form.controls.name.value,
      weight: <number>this.form.controls.weight.value,
      symbol: <string>this.form.controls.symbol.value,
    })
  }
}
