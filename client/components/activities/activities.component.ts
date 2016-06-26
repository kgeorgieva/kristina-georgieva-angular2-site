import {Component} from 'angular2/core';

@Component({
  selector: 'activities',
  templateUrl: './components/activities/activities.component.html'
})
export class ActivitiesComponent  implements AfterViewInit {
		
		ngAfterViewInit() {
    		drawRegionsMap();

    		$(window).on("resize", function (event) {
    				drawRegionsMap();
			   });
  		}

      function drawRegionsMap() {

        let data = google.visualization.arrayToDataTable([
          ['Country', ''],
          ['Venezuela', 200],
          ['South Africa', 200],
          ['Mexico', 300],
          ['Bulgaria', 300],
          ['China', 100],
          ['Thailand', 200],
          ['Vietnam', 300],
          ['Turkey', 200],
          ['Mozambique', 100],
          ['Argentina', 100],
          ['Namibia', 100],
          ['', 0]
        ]);

        let options = {
        	backgroundColor: {
            		fill: 'transparent'
            }, 
            datalessRegionColor: '#ede0d4',
            colorAxis: {colors: ['#603913']},
            width: "100%"
        };

        let chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }
}
