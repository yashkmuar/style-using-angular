import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [Profile],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title:string = 'style-using-angular';
}
