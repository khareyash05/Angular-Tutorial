import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularbegin';
  name = 'Angular';
  alpha = {
    name: 'App',
    belt: 'brown',
  }
  yell(e : any) {
    alert("Yelling");
  }
}
