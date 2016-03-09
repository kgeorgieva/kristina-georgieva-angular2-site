import {Component} from 'angular2/core';
import {HigherEducationComponent} from '../../components/education/sub-components/higher-education.component';
import {StandardEducationComponent} from '../../components/education/sub-components/standard-education.component';


@Component({
  selector: 'education',
  templateUrl: './components/education/education.component.html',
  directives: [HigherEducationComponent, StandardEducationComponent]
})
export class EducationComponent {}
