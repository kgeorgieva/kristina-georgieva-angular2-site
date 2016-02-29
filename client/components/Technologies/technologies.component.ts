import {Component} from 'angular2/core';

@Component({
  selector: 'technologies',
  templateUrl: './components/technologies/technologies.component.html'
})
export class TechnologiesComponent {
	constructor() {
		this.technologies = [
			{
				name: 'AngularJS',
				proficiency: 'bg-success',
				type: 'language'
			},
			{
				name: 'Java',
				proficiency: 'bg-success',
				type: 'language'
			},
			{
				name: 'C# .Net',
				proficiency: 'bg-success',
				type: 'language'
			},
			{
				name: 'MSSQL',
				proficiency: 'bg-success',
				type: 'database'
			},
			{
				name: 'Javascript',
				proficiency: 'bg-success',
				type: 'language'
			},
			{
				name: 'ECMAScript 2015 (ES6)',
				proficiency: 'bg-warning',
				type: 'language'
			},
			{
				name: 'Git',
				proficiency: 'bg-success',
				type: 'other'
			},
			{
				name: 'TFS',
				proficiency: 'bg-warning',
				type: 'other'
			},
			{
				name: 'SVN',
				proficiency: 'bg-warning',
				type: 'other'
			},
			{
				name: 'MySQL',
				proficiency: 'bg-warning',
				type: 'database'
			},
			{
				name: 'HTML 5',
				proficiency: 'bg-success',
				type: 'language'
			},
			{
				name: 'Maven',
				proficiency: 'bg-success',
				type: 'other'
			},
			{
				name: 'Npm',
				proficiency: 'bg-success',
				type: 'other'
			},
			{
				name: 'Latex',
				proficiency: 'bg-success',
				type: 'publishing'
			},
			{
				name: 'JQuery',
				proficiency: 'bg-warning',
				type: 'language'
			},
			{
				name: 'MongoDB',
				proficiency: 'bg-warning',
				type: 'database'
			},
			{
				name: 'CSS 3',
				proficiency: 'bg-success',
				type: 'language'
			},
			{
				name: 'R',
				proficiency: 'bg-warning',
				type: 'language'
			}
		];
	}
}
