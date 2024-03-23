var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");
function openSidebarOpen(){
    if(!sidebarOpen){
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar(){
    if(sidebarOpen){
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}
var barChartoptions = {
    series: [{
    data: [400, 430, 448, 470, 500],
    name:"products",
  }],
    chart: {
    type: "bar",
    background:"transparent",
    height: 350,
    toolbar:{
        show:false,
    },
},
    colors:[
        "#2962ff",
        "#d50000",
        "#2e7d32",
        "#ff6d00",
        "#5833cb",
    ],
  
  plotOptions: {
    bar: {
    distributed:true,
     borderRadius: 4,
    horizontal: false,
    columnwidth:"40%",
    }
  },
  dataLabels: {
    enabled: false,
  },
  fill:{
    opacity: 1,

  },
  grid:{
    borderColor: "#55596e",
    yaxis:{
        lines:{
            show:true,
        },
    },
    xaxis:{
        lines:{
            show:true,
        },
    },
  },
  legend:{
    labels:{
        colors:"#15f7ff",
    },
        show:true,
        position:"top", 
  },
  stroke:{
    colors:["transparent"],
    show:true,
    width:2
  },
  tooltip:{
    shared:true,
    intersect:false,
    theme:"dark",
  },
  xaxis: {
    categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'
      
    ],
    title:{
        style: {
            color:"#000000",
        },
      },
      axisBorder:{
        color:"#55596e",
        show:true
      },
      axisTicks:{
        color:"#55596e",
        show: true
      },
      labels:{
        style:{
            colors:"#15f7ff",
        },
    
      },
   
  },
  yaxis: {
    title:{
    text:"count",
    style:{
        color:"#000000",
    },
  },
  axisBorder:{
    color:"#55596e",
    show:true
  },
  axisTicks:{
    color:"#55596e",
    show: true
  },
  labels:{
    style:{
        color:"#000000",
    },

  },
},
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartoptions);
  barChart.render();

  var seriesData = [{
    name: 'Series 1',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }, {
    name: 'Series 2',
    data: [10, 15, 20, 25, 32, 40, 35, 50, 49]
  }];

  // Options for the area chart
  var areaChartoptions = {
    chart: {
      type: 'area',
      height: 350,
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    series: seriesData,
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
    },
    yaxis: {
      title: {
        text: 'Units'
      }
    }
  };

  // Initialize the area chart
  var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartoptions);

  // Render the chart
  areaChart.render();


