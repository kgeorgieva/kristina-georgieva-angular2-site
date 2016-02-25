import {Directive, ElementRef} from 'angular2/core';

@Directive({
  selector: '[about-content]'
})
export class AboutContent {
  constructor() {
    this.content = {
    	text: "This is the about page"
    };
  }
}
