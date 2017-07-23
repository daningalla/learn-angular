import { Component } from '@angular/core';
import {DisplayMode} from './shared/displaymode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mode = 'recipes';

  public displayModes = DisplayMode;

  onViewChanged(mode: string){
    this.mode = mode;
  }
}
