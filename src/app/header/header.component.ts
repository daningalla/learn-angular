import {Component, EventEmitter, Output} from '@angular/core';
import {DisplayMode} from '../shared/displaymode';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header'
})
export class HeaderComponent {

  @Output() modeChanged: EventEmitter<string> = new EventEmitter<string>();
  public displayModes = DisplayMode;

  onChangeView(mode: string){
    this.modeChanged.emit(mode);
  }
}
