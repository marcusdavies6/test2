
import { Asset } from './asset';
import { UtilDetailComponent } from './../util/util-detail.component';

// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { AssetService } from './asset.service';
import { ForecastService } from './../forecasting/forecast.service';

import {MdSnackBar} from '@angular/material';
import { MdIcon, MdIconRegistry } from '@angular/material';

import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: 'src/app/asset-detail.component',  
  selector: 'my-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['././../app.component.css', './asset-detail.component.css'],
  providers: [MdIconRegistry]
})

export class AssetDetailComponent implements OnInit {

    constructor(
        private assetService: AssetService,
        private forecastService: ForecastService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    visCashFlowChart = false;
    cashflowtype = 'line';
    cashflowdata = {labels: [], datasets: [
        {
            label: "Cash In", data: [], 
            borderColor: "rgba(0, 255, 0, 1, 0.8)",
            backgroundColor: "rgba(0, 255, 0, 0.2)"}, 
         {
            label: "Cash Out", data: [],
            borderColor: "rgba(255, 0, 0, 1, 0.8)",
            backgroundColor: "rgba(255, 0, 0, 0.2)"}, 
         {
            label: "Total", data: [], 
            borderColor: "rgba(0, 0, 255, 1, 0.8)",
            backgroundColor: "rgba(0, 0, 255, 0.2)"}, 
    ]};
    cashflowoptions = {
        responsive: true,
        maintainAspectRatio: false
    }; 

    getCashflow(assetId: number): void {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        this.forecastService.getCashflow_Asset(assetId).then((cashflow) => {
        cashflow.forEach(element => {
            //for some reason the element.forecastDate is not a "real" Date type 
            //for getMonth() does not work?? - only toString works
            //So for now hack it and extract the month from the string!
            var month = Number(element.forecastDate.toString().substr(5, 2));
            this.cashflowdata.labels.push(monthNames[month-1]);
            this.cashflowdata.datasets[0].data.push(element.totalCashIn);
            this.cashflowdata.datasets[1].data.push(element.totalCashOut);
            this.cashflowdata.datasets[2].data.push(element.totalCashFlow);
        });      
        }).then((cashflow) => {
            this.visCashFlowChart = true;
        });
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.assetService.getAsset(+params['id']))
            .subscribe(asset => this.asset = asset);

        this.getCashflow(0);
    }

    goBack(): void {
        this.location.back();
        }



    // save(): void {
    //     this.assetService.update(this.hero)
    //         .then(() => this.goBack());
    // }



  @Input()
  asset: Asset;
}
