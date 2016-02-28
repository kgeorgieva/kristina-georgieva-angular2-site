import {Component} from 'angular2/core';

import {AboutComponent} from '../../components/about/about.component';
import {CvComponent} from '../../components/cv/cv.component';
import {TechnologiesComponent} from '../../components/technologies/technologies.component';
import {EducationComponent} from '../../components/education/education.component';
import {PublicationsComponent} from '../../components/publications/publications.component';
import {ActivitiesComponent} from '../../components/activities/activities.component';
import {ContactComponent} from '../../components/contact/contact.component';

@Component({
  selector: 'overlay',
  templateUrl: './components/overlay/overlay.component.html',
  directives: [AboutComponent,
	CvComponent,
	TechnologiesComponent
	EducationComponent,
	PublicationsComponent,
	ActivitiesComponent,
	ContactComponent
  ],
  inputs: ['currentPage']
})
export class OverlayComponent {
	
}
