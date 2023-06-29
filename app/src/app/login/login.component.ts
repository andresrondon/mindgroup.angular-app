import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  text: string = "Regresar";

  @Output() click: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router
  ) {

  }

  return() {
    this.click.emit(this.text);
    this.router.navigate(['/']);
  }
}
