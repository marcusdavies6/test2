import { Component, OnInit } from '@angular/core';

import { CashFlowFleet } from './../forecasting/forecast';
import { ForecastService } from './../forecasting/forecast.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./../app.component.css']
})

export class DashboardComponent implements OnInit {
  Dashboard6MthLeaseReturn = 5;
  Dashboard6MthDeliveries = 8; 

  TmpVar="hello";
  TmpVar2=new Date();
  tmpCashFlow : CashFlowFleet[];

  visCashFlowChart = false;
  visAssetValueChart = false;

  constructor(
    private forecastService: ForecastService,
    private router: Router
  ) { }

  salespipelinetype = 'polarArea';

//"#FFCE56"

  salespipelinedata = {
    labels: ["Interest", "Dicussion", "Contract"],
    datasets: [
      {
        data: [15, 12, 5],
        backgroundColor: [
            "rgba(0, 81, 255, 0.5)",
            "rgba(242, 255, 0, 0.5)",
            "rgba(81, 255, 0, 0.5)",
        ],
      }
    ]
  };

  salespipelineoptions = {
    responsive: true,
    maintainAspectRatio: false
  };

  cashflowtype = 'line';
  cashflowdata = {labels: [], datasets: [{label: "Total", data: []} ]};
  cashflowoptions = {
    responsive: true,
    maintainAspectRatio: false
  };  

  assetvaluetype = 'line';
  assetvaluedata = {labels: [], datasets: [{label: "Total", data: []} ]};
  assetvalueoptions = {
    responsive: true,
    maintainAspectRatio: false
  };  

  sallyimage = './public/images/sallysale.jpg'; 

  

  getCashflow(): void {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    this.forecastService.getCashflow_Fleet().then((cashflow) => {
      this.tmpCashFlow = cashflow;

      this.tmpCashFlow.forEach(element => {
        //for some reason the element.forecastDate is not a "real" Date type 
        //for getMonth() does not work?? - only toString works
        //So for now hack it and extract the month from the string!
        var month = Number(element.forecastDate.toString().substr(5, 2));
        this.cashflowdata.labels.push(monthNames[month-1]);
        this.cashflowdata.datasets[0].data.push(element.totalCashFlow);
      });      
    }).then((cashflow) => {
         this.visCashFlowChart = true;
    });
  }

  getAssetValue(): void {
    //Currently the asset value chart uses the same data as the cash flow chart

    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    this.forecastService.getCashflow_Fleet().then((assetvalue) => {
      assetvalue.forEach(element => {
        //for some reason the element.forecastDate is not a "real" Date type 
        //for getMonth() does not work?? - only toString works
        //So for now hack it and extract the month from the string!
        var month = Number(element.forecastDate.toString().substr(5, 2));
        this.assetvaluedata.labels.push(monthNames[month-1]);
        this.assetvaluedata.datasets[0].data.push(element.totalCashFlow);
      });      
    }).then((assetvalue) => {
         this.visAssetValueChart = true;
    });
  }  

  ngOnInit(): void {
    this.getCashflow();
    this.getAssetValue();
  }  

}