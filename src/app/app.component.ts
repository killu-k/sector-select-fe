import { Component } from '@angular/core';
import {UserComponent} from './components/user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    UserComponent
  ]
})
export class AppComponent {}
