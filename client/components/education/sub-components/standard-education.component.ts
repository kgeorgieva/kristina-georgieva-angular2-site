import {Component} from 'angular2/core';

@Component({
  selector: 'standard-education',
  templateUrl: './components/education/sub-components/standard-education.component.html'
})
export class StandardEducationComponent  implements AfterViewInit {
		
		ngAfterViewInit() {
    		drawChart();

    		$(window).on("resize", function (event) {
    				drawChart();
			});
  		}

      function drawChart() {
        let container = document.getElementById('standard-timeline');
        let chart = new google.visualization.Timeline(container);
        let dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'Institution' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Instituto Escuela', 'Primary School', new Date(1996, 09, 01), new Date(2003, 12, 01) ],
          [ 'Sharonlea', 'Primary School', new Date(2004, 01, 01),  new Date(2004, 12, 01) ],
          [ 'Fourways', 'Highschool', new Date(2005, 01, 01),  new Date(2005, 12, 01) ],
          [ 'Silver Oaks International', 'O and A levels', new Date(2006, 01, 01),  new Date(2007, 12, 01) ]]);
          
          let options = {
      		width: "100%",
        	colors: ['#cbb69d', '#603913', '#c69c6e', '#cbb69d', '#603913', '#c69c6e']
    	  };

          chart.draw(dataTable, options);
       }
}
