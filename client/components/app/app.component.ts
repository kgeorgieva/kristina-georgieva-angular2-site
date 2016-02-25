import {Component, ViewEncapsulation} from 'angular2/core';

import {HttpUtil} from '../../core/http.util';
import {Notification} from '../../core/dto';

@Component({
  selector: 'app',
  templateUrl: './components/app/app.component.html',
  styleUrls: ['./components/app/app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	constructor() {
		this.showOverlay = false;
	}
	
	openOverlay(contentName) {
		this.showOverlay = true;
    };
}

