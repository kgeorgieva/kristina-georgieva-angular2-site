import {Component} from 'angular2/core';

@Component({
  selector: 'cv',
  templateUrl: './components/cv/cv.component.html'
})
export class CvComponent implements AfterViewInit {
		
		ngAfterViewInit() {
    		drawChart();

    		$(window).on("resize", function (event) {
    				drawChart();
			});
  		}

	    function drawChart() {
	        let data = google.visualization.arrayToDataTable([
	         ['Company', 'Years of work', { role: 'style' }, { role: 'annotation' } ],
	         ['Freelance', 3, '#EFE0B9', 'PHP, MySQL' ],
	         ['University of Pretoria', 1, '#E4B04A', 'Java, MongoDB' ],
	         ['SAP', 2, 'silver', 'Java Web and Android' ],
	         ['Entelect', 1, '#643B0F', 'AngularJS, C# .Net, MSSQL, MongoDB' ],
	         ['Education', 3, 'color: #B7521E', 'Computer Science, Maths, Spanish' ]
	      ]);
	      

	      let view = new google.visualization.DataView(data);
	      view.setColumns([0, 1,
	                       { calc: "stringify",
	                         sourceColumn: 3,
	                         type: "string",
	                         role: "annotation" },
	                       2]);

	      let options = {
	        title: "Previous Positions (languages and databases)",
	        width: "100%",
	        height: 550,
	        bar: {groupWidth: "95%"},
	        legend: { position: "none" },
	        vAxis: { 
	          title: 'Years',	
              viewWindow: {
                max: 3
              }
            },
            hAxis: { 
              title: 'Companies'
            }
	      };

	      let chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
	      chart.draw(view, options);
	  }
  
}
