import {Component} from 'angular2/core';

@Component({
  selector: 'higher-education',
  templateUrl: './components/education/sub-components/higher-education.component.html'
})
export class HigherEducationComponent  implements AfterViewInit {
		
		ngAfterViewInit() {
    		drawChart();

    		$(window).on("resize", function (event) {
    				drawChart();
			});
  		}

      function drawChart() {
        let container = document.getElementById('higher-timeline');
        let chart = new google.visualization.Timeline(container);
        let dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Insititution' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'University of Pretoria', 'Bachelor of Information Technology (distinction)', new Date(2008, 01, 01),  new Date(2011, 12, 01) ],
          [ 'University of Pretoria', 'Masters in Computer Science (distinction)', new Date(2012, 01, 01),  new Date(2015, 01, 01) ]]);
          
         let options = {
      		width: "100%",
        	colors: ['#cbb69d', '#603913']
    	 };

         chart.draw(dataTable, options);
      }
}
