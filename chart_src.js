chartweektime1 = localStorage.getItem("chartweektime");
chartweektime1data1 = localStorage.getItem("chartweektimedata");
chartweektime1=JSON.parse(chartweektime1);
chartweektime1data1=JSON.parse(chartweektime1data1);

document.getElementById("fulltime").innerHTML = chartweektime1;
document.getElementById("title").innerHTML ='Without project '+ chartweektime1;

getcharttimedata = localStorage.getItem("charttime");
charttimedata = JSON.parse(getcharttimedata);


getcharttimelabel = localStorage.getItem("charttimelabel");
charttimelabel = JSON.parse(getcharttimelabel);

doughnutdata=[];
doughnutdata.push(chartweektime1data1);

doughlabel=[];
doughlabel.push(chartweektime1);

colors=['rgb(198, 210, 217)','rgb(198, 210, 217)','rgb(198, 210, 217)','rgb(198, 210, 217)','rgb(198, 210, 217)','rgb(198, 210, 217)','rgb(198, 210, 217)'];


var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Sun','Mon', 'Tue', 'Wed', 'Thur', 'Fri','Sat'],
        datasets: [
        {
        	
            data: charttimedata,
            backgroundColor: colors
        
        },
        ]
    },
   	options: {
        plugins: {
            tooltip: {
                callbacks: {
                	
				    label: function(context) {
                   
                        var ind=context.dataIndex;


                        return charttimelabel[ind];
                    }

                }
            }
        }
    }
    
});


var ctx2 = document.getElementById('doughnutChart').getContext('2d');

var doughnutChart = new Chart(ctx2, {
	
	type: 'doughnut',
	  data: {

	  datasets: [{
	    
	    data: doughnutdata,
	    backgroundColor: [
	      'rgb(198, 210, 217)',
	      
	    ],
	    hoverOffset: 4
  }]
  },
    options: {
    	maintainAspectRatio : false,
    	plugins: {
            tooltip: {
                callbacks: {
                	
				    label: function(context) {
                   
                        var ind=context.dataIndex;


                        return 'Without project '+doughlabel[ind]+' 100%';
                    }

                }
            }
        },
        scales: {
		   x: {
		      display: false,
		   },
		   y: {
		      display: false,
		   }
		}

    }
});

var ctx4 = document.getElementById('horizontalchart').getContext('2d');
var horizontalchart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['project'],
        datasets: [
        {
            axis: 'y',
            label:'Without project',
            data: doughnutdata,
            backgroundColor: [
	      'rgb(198, 210, 217)',
	      
	    ]
        
        },
        ]
    },
    options:{
    	plugins: {
            tooltip: {
                callbacks: {
                	
				    label: function(context) {
                   
                        var ind=context.dataIndex;


                        return 'Without project '+doughlabel[ind]+' 100%';
                    }

                }
            }
        },
    	scales: {
		   x: {
		      display: false,
		   },
		   y: {
		      display: false,
		   }
		}

    }

        
});


