import {Component, ViewEncapsulation} from 'angular2/core';

import {HttpUtil} from '../../core/http.util';
import {Notification} from '../../core/dto';
import {HomeComponent} from '../../components/home/home.component';
import {OverlayComponent} from '../../components/overlay/overlay.component';

@Component({
  selector: 'app',
  styleUrls: ['./components/app/app.component.css'],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './components/app/app.component.html',
  directives: [HomeComponent, OverlayComponent]
})
export class AppComponent {
	constructor() {
		this.showOverlay = false;
		this.page = 'about';
	}

	closeOverlay() {
		this.showOverlay = false;
    };
	
	openOverlay(contentName) {
		this.showOverlay = true;
		this.page = contentName;
    };

}

